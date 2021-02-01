import {GenerateStringId} from "../../Utils/Generator/Generator";

const Create_Comments_Services = async (parent, args, ctx) => {
    //Check if ID author found
    const author = await ctx.db.User.find(user => user.id === args.data.author)
    if (!author) {
        throw new Error("Author with that id doesn't found!")
    }
    // Check if ID Post Found
    const post = await ctx.db.Post.find(post => post.id === args.data.post)
    if (!post) {
        throw new Error("Post with That ID Doesn't found")
    }
    const comment = {
        id: GenerateStringId("CommentID", 64),
        ...args.data
    }

    ctx.db.Comment.push(comment)
    return comment
}

const Get_Comment_Services = (parent, args, ctx) => {
    if (!args.query) {
        return ctx.db.Comment
    }

    return ctx.db.Comment.filter((comment) => {
        const isIdMatch = comment.id.includes(args.query)
        const isTextMatch = comment.text.includes(args.query)

        return isIdMatch || isTextMatch
    })
}

const Get_Comments_Author_Services = (parent, args, ctx) => {
    return ctx.db.User.find((user) => {
        return user.id === parent.author
    })
}

const Get_Comment_Post_Services = (parent, args, ctx) => {
    return ctx.db.Post.find((post) => {
        return post.id === parent.post
    })
}

const Update_Comment_Services = (parent, args, ctx) => {
    let indexComment
    const comment = ctx.db.Comment.find((comment, index) => {
        if (comment.id === args.id) {
            indexComment = index
            return comment
        }
    })

    if (typeof args.text === "string") {
        comment.text = args.text
    }

    ctx.db.Comment[indexComment] = comment

    return comment
}

const Delete_Comment_Services = (parent, args, ctx) => {
    const commentIndex = ctx.db.Comment.findIndex(comment => comment.id === args.id)

    if (commentIndex === -1) {
        throw new Error("Unable to find Comment with that ID")
    }

    const deletedComment = ctx.db.Comment.splice(commentIndex, 1)

    return deletedComment[0]
}

const Services = {
    CreateComment: Create_Comments_Services,
    GetComment: Get_Comment_Services,
    GetCommentPost: Get_Comment_Post_Services,
    GetCommentAuthor: Get_Comments_Author_Services,
    UpdateComment: Update_Comment_Services,
    DeleteComment: Delete_Comment_Services
}

export {Services as default}