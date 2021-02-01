import {Services} from "../../Services/Post_Services/post_services"

const posts = (parent, args, ctx, info) => {
    return Services.GetPost(parent, args, ctx)
}

const PostAuthor = (parent, args, ctx, info) => {
    return Services.GetAuthorPost(parent, args, ctx)
}

const CreatePost = (parent, args, ctx, info) => {
    return Services.CreatePost(parent, args, ctx)
}

const DeletePost = (parent, args, ctx, info) => {
    return Services.DeletePost(parent, args, ctx)
}

const Controller = {
    posts,
    PostAuthor,
    CreatePost,
    DeletePost
}


export {Controller as default}