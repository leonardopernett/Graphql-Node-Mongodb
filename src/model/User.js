import {Schema, model} from 'mongoose'

const USerSchema = new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    age:{type:Number, },
})


export default model('User', USerSchema)