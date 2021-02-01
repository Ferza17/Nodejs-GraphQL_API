let UserDummyData = [
    {
        id: "ABC123",
        name: "andrew",
        email: "andrew@email.com",
        age: 29
    },
    {
        id: "CDE123",
        name: "Layla",
        email: "Layla@email.com",
        age: 21
    },
    {
        id: "EFG123",
        name: "Mike Pompeo",
        email: "Mike@email.com",
        age: 32
    },

]

let PostDummyData = [
    {
        id: "POST1",
        title: "A First Post",
        body: "First Post Body",
        published: false,
        author: "ABC123",
    },
    {
        id: "POST2",
        title: "A New Post 2",
        body: "First Post Body 2",
        published: true,
        author: "CDE123",
    },
    {
        id: "POST3",
        title: "A New Post 3",
        body: "First Post Body 3",
        published: false,
        author: "EFG123",
    }
]

const db = {
    User : UserDummyData,
    Post: PostDummyData
}

export {db as default}