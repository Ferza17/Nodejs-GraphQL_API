import PostController from "../Controllers/Post_Controller/post_controller";


const Post = {
    author: PostController.GetPostAuthor,
    comments: PostController.GetPostComments,
}

export default Post