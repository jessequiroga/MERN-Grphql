import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/dbgraphql', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then( () => console.log("DB is connected"))
.catch(e => console.log(e.message));
