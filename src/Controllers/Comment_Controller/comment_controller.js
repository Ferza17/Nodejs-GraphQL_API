import Services from "../../Services/Comments_Services/comments_services"

const CreateComment = (parent, args, ctx, info) => {
    return Services.CreateComment(parent, args, ctx)
}

const GetComments = (parent, args, ctx, info) => {
    return Services.GetComment(parent, args, ctx)
}

const GetCommentPost = (parent, args, ctx, info) => {
    return Services.GetCommentPost(parent, args, ctx)
}

const GetCommentsAuthor = (parent, args, ctx, info) => {
    return Services.GetCommentAuthor(parent, args, ctx)
}

const UpdateComment = (parent, args, ctx, info) => {
    return Services.UpdateComment(parent, args, ctx)
}

const DeleteComment = (parent, args, ctx, info) => {
    return Services.DeleteComment(parent, args, ctx)
}

const Controller = {
    CreateComment,
    GetComments,
    GetCommentPost,
    GetCommentsAuthor,
    UpdateComment,
    DeleteComment
}

export {Controller as default}