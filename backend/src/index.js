import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from './resolvers';
import db from './db';

const app = express();

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

async function main() {
    app.listen(8000, ()=> {
        console.log('server running on port 8000' + server.graphqlPath);
    });
}

main();