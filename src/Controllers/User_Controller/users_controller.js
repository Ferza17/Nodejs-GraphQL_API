import {Services} from "../../Services/User_Services/user_services"

const me = (parent, args, ctx, info) => {
    return Services.GetMe(parent, args, ctx)
}

const users = (parent, args, ctx, info) => {
    return Services.GetUser(parent, args, ctx)
}


const GetUserPost = (parent, args, ctx, info) => {
    return Services.GetUserPost(parent, args, ctx)
}

const CreateUser = (parent, args, ctx, info) => {
    return Services.CreateUser(parent, args, ctx)
}

const UpdateUser = (parent, args, ctx, id) => {
    return Services.UpdateUser(parent, args, ctx)
}

const DeleteUser = (parent, args, ctx, info) => {
    return Services.DeleteUser(parent, args, ctx)
}

const Controller = {
    CreateUser,
    me,
    users,
    GetUserPost,
    UpdateUser,
    DeleteUser
}

export {Controller as default}