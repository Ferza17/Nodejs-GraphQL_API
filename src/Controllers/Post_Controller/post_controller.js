import Services from "../../Services/Post_Services/post_services"

const CreatePost = (parent, args, ctx, info) => {
    return Services.CreatePost(parent, args, ctx)
}

const GetPosts = (parent, args, ctx, info) => {
    return Services.GetPost(parent, args, ctx)
}

const GetPostComments = (parent, args, ctx, info) => {
    return Services.GetPostComments(parent, args, ctx)
}

const GetPostAuthor = (parent, args, ctx, info) => {
    return Services.GetAuthorPost(parent, args, ctx)
}

const UpdatePost = (parent, args, ctx, info) => {
    return Services.UpdatePost(parent, args, ctx)
}

const DeletePost = (parent, args, ctx, info) => {
    return Services.DeletePost(parent, args, ctx)
}

const Controller = {
    CreatePost,
    GetPosts,
    GetPostAuthor,
    GetPostComments,
    UpdatePost,
    DeletePost
}


export {Controller as default}