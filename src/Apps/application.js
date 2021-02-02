import {GraphQLServer, PubSub} from 'graphql-yoga'
import db from "../Datasources/DummyData"
import Query from "../Resolvers/Query";
import Mutation from "../Resolvers/Mutation";
import User from "../Resolvers/User";
import Post from "../Resolvers/Post";
import Comment from "../Resolvers/Comment";
import Subscription from "../Resolvers/Subscription";

const StartApplication = () => {
    console.log("About to start Apps")

    const pubsub = new PubSub()

    const resolvers = {
        Query,
        Mutation,
        Subscription,
        User,
        Post,
        Comment
    }


    const server = new GraphQLServer({
        typeDefs: "./src/Apps/schema.graphql",
        resolvers,
        context: {
            db,
            pubsub
        }
    })

    server.start().then(
        console.log("Server is running")
    ).catch(err => {
    })

}


export default StartApplication;
