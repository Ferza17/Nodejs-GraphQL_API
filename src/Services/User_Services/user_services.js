import {GenerateStringId} from "../../Utils/Generator/Generator";

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

const Update_User_Services = (parent, args, ctx) => {
    let indexUser
    const user = ctx.db.User.find((user, index) => {
        if (user.id === args.id) {
            indexUser = index
            return user
        }
    })

    if (!user) {
        throw new Error("User not Found")
    }

    if (typeof args.data.email === "string") {
        const emailTaken = ctx.db.User.some((user) => user.email === args.data.email)

        if (emailTaken) {
            throw new Error("Email already Taken")
        }

        user.email = args.data.email
    }

    if (typeof args.data.name === "string") {
        user.name = args.data.name
    }

    if (typeof args.data.age !== "undefined") {
        user.age = args.data.age
    }

    ctx.db.User[indexUser] = user

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
    CreateUser: Create_User_Services,
    GetMe: Get_Me_Services,
    GetUser: Get_User_Services,
    GetUserPost: Get_UserPost_Services,
    UpdateUser: Update_User_Services,
    DeleteUser: Delete_User_Services
}