import UserController from "../Controllers/User_Controller/users_controller";
import PostController from "../Controllers/Post_Controller/post_controller";
import CommentController from "../Controllers/Comment_Controller/comment_controller"

const Mutation = {
    //User
    createUser: UserController.CreateUser,
    deleteUser: UserController.DeleteUser,
    updateUser: UserController.UpdateUser,
    // Post
    createPost: PostController.CreatePost,
    updatePost: PostController.UpdatePost,
    deletePost: PostController.DeletePost,
    // Comments
    createComment: CommentController.CreateComment,
    updateComment: CommentController.UpdateComment,
    deleteComment: CommentController.DeleteComment

}
export default Mutation