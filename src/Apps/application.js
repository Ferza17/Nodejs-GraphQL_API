import {GraphQLServer} from 'graphql-yoga'
import resolvers from "./resolvers";
import db from "../Datasources/DummyData"


const StartApplication = () => {
    console.log("About to start Apps")

    const server = new GraphQLServer({
        typeDefs: "./src/Apps/schema.graphql",
        resolvers,
        context: {
            db
        }
    })

    server.start().then(
        console.log("Server is running")
    ).catch(err => {})

}


export default StartApplication;
