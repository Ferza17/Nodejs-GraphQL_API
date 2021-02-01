import {GenerateStringId} from "../../Utils/generator/generator";

const Get_Me_Services = (parent, args, ctx) => {
    return {
        id: GenerateStringId("userID", 64),
        name: "andrew",
        email: "andrew@email.com",
        age: 29
    }
}

const Get_User_Services = (parent, args, ctx) => {
    if (!args.query) {
        return ctx.db.User
    }

    return ctx.db.User.filter((user) => {
        const isIdMatch = user.id.toLowerCase().includes(args.query.toLowerCase())
        const isNameMatch = user.name.toLowerCase().includes(args.query.toLowerCase())
        const isEmailMatch = user.email.toLowerCase().includes(args.query.toLowerCase())
        const isAgeMatch = user.age.includes(args.query)

        return isIdMatch || isNameMatch || isEmailMatch || isAgeMatch
    })
}

const Get_UserPost_Services = (parent, args, ctx) => {
    return ctx.db.Post.filter((post) => {
        return post.author === parent.id
    })
}

const Create_User_Services = (parent, args, ctx) => {
    // Validation email if Exist
    const emailTaken = ctx.db.User.some((user) => user.email === args.data.email)
    if (emailTaken) {
        throw new Error("Email Already Taken.")
    }


    const user = {
        id: GenerateStringId("UserId", 64),
        ...args.data
    }

    ctx.db.User.push(user)
    return user
}

const Delete_User_Services = (parent, args, ctx) => {
    // Delete User
    const userIndex = ctx.db.User.findIndex(user => user.id === args.id)
    if (userIndex === -1) {
        throw new Error("User Not Found")
    }

    const deletedUser = ctx.db.User.splice(userIndex, 1)
    ctx.db.User.splice(userIndex, 1)

    return deletedUser[0]

}

export const Services = {
    GetMe: Get_Me_Services,
    GetUser: Get_User_Services,
    GetUserPost: Get_UserPost_Services,
    CreateUser: Create_User_Services,
    DeleteUser: Delete_User_Services
}