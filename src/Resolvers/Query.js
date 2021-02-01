import UserController from "../Controllers/User_Controller/users_controller";
import PostController from "../Controllers/Post_Controller/post_controller";
import CommentController from "../Controllers/Comment_Controller/comment_controller"

const Query = {
    me: UserController.me,
    posts: PostController.GetPosts,
    users: UserController.users,
    comments: CommentController.GetComments
}

export default Query