import {connect} from 'mongoose'

export async function conexion(){
   try {
    await connect('mongodb://localhost/mongo-graphql',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('db is connected');
   }catch(e){
       console.log('something oes wrong',e)
   }
}
