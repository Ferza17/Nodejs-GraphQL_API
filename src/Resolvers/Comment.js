
import CommentController from "../Controllers/Comment_Controller/comment_controller"

const Comment = {
    author: CommentController.GetCommentsAuthor,
    post: CommentController.GetCommentPost
}

export default Comment