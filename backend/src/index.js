import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './data/schema';
import db from './db';

const app = express();

schema().then((schema)=>{
    app.use('/graphql',graphqlHTTP({
        schema,
        graphiql:true
    }));
})
.catch(e => console.log(e));

app.listen(8000, ()=> {
    console.log('server running on port 8000');
})