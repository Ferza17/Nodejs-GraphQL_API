import UserController from "../Controllers/User_Controller/users_controller"
import PostController from "../Controllers/Post_Controller/post_controller"
const resolvers = {
    Query: {
        me: UserController.me,
        posts: PostController.posts,
        users: UserController.users
    },
    Mutation: {
        createUser: UserController.CreateUser,
        deleteUser: UserController.DeleteUser,
        createPost: PostController.CreatePost,
        deletePost: PostController.DeletePost
    },
    Post: {
        author: PostController.PostAuthor
    },
    User: {
        posts: UserController.UserPost
    }
}

export default resolvers
