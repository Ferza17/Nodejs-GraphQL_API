import {GenerateStringId} from "../../Utils/Generator/Generator";

const Create_Post_Service = (parent, args, ctx) => {
    const userExists = ctx.db.User.some(user => user.id === args.data.author)

    if (!userExists) {
        throw new Error("User doesnt exist")
    }

    const post = {
        id: GenerateStringId("PostID", 64),
        ...args.data
    }

    ctx.db.Post.push(post)
    if (args.data.published) {
        ctx.pubsub.publish("post", {
            post: {
                mutation: "CREATED",
                data: post
            }
        })
    }
    return post

}

const Get_Post_Service = (parent, args, ctx) => {
    if (!args.query) {
        return ctx.db.Post
    }
    return ctx.db.Post.filter((post) => {
        const isIdMatch = post.id.toLowerCase().includes(args.query.toLowerCase())
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
        const isBodyMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
        const isPublishedMatch = post.published.toString().toLowerCase(args.query.toString().toLowerCase())

        return isIdMatch || isTitleMatch || isBodyMatch || isPublishedMatch
    })
}

const Get_Author_Post_Service = (parent, args, ctx) => {
    return ctx.db.User.find(user => {
        return user.id === parent.author
    })
}

const Get_Post_Comments = (parent, args, ctx) => {
    return ctx.db.Comment.filter((comment) => {
        return comment.post === parent.id
    })
}

const Update_Post_Service = (parent, args, ctx) => {
    const {id, data} = args
    let indexPost
    const post = ctx.db.Post.find((post, index) => {
        if (post.id === id) {
            indexPost = index
            return post
        }
    })
    const originalPost = {...post}

    if (!post) {
        throw new Error("Post Doesn't Exists")
    }

    if (typeof data.title === "string") {
        const takenTitle = ctx.db.Post.some((post) => post.title === data.title)
        if (takenTitle) {
            throw new Error("Title already use!")
        }
        post.title = data.title
    }

    if (typeof data.body === "string") {
        post.body = data.body
    }

    if (typeof data.published === "boolean") {
        post.published = data.published
        if (originalPost.published && !post.published) {
            // Deleted
            ctx.pubsub.publish("post", {
                post: {
                    mutation: "DELETED",
                    data: originalPost
                }
            })
        } else if (!originalPost.published && post.published) {
            // Created
            ctx.pubsub.publish("post", {
                post: {
                    mutation: "CREATED",
                    data: post
                }
            })
        }
    }else if (post.published) {
        // Updated
        ctx.pubsub.publish("post", {
            post: {
                mutation: "UPDATED",
                data: post
            }
        })
    }

    ctx.db.Post[indexPost] = post

    return post
}


const Delete_Post_Services = (parent, args, ctx) => {
    const userIndex = ctx.db.Post.findIndex(post => post.id === args.id)

    if (userIndex === -1) {
        throw new Error("Post Not Found")
    }

    const [post] = ctx.db.Post.splice(userIndex, 1)
    ctx.db.Post.splice(userIndex, 1)

    if (post.published) {
        ctx.pubsub.publish("post", {
            post: {
                mutation: "DELETED",
                data: post
            }
        })
    }

    return post
}


const Services = {
    CreatePost: Create_Post_Service,
    GetPost: Get_Post_Service,
    GetAuthorPost: Get_Author_Post_Service,
    GetPostComments: Get_Post_Comments,
    UpdatePost: Update_Post_Service,
    DeletePost: Delete_Post_Services
}


export default Services