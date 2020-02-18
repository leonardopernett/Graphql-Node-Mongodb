import '@babel/polyfill';
import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from './schema'

import {conexion} from './database'
const  app  = express();

conexion()

app.get('/',(req,res,next)=>{
    res.json({message:'hello wolrd'});
})


app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema,
    context:{
        messageId:'test'
    }
}));


app.listen(3000,()=>console.log('server o port 3000'));