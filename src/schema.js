import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from './resolvers'

const typeDefs = ` 
     type Query {
         hello: String
         greet(name: String!): String
         tasks:[Task]
         users:[User]
     }

     type Task {
         _id:ID
         title: String!
         description:String!
         number:Int
     }

     type User {
         _id:ID
         firstname:String!
         lastname:String!
         age:Int
     }

     type Mutation {
         createtask(input: TaskInput): Task
         createUser(input:UserInput): User
         deleteUser(_id:ID):User
         updateUser(_id:ID, input:UserInput):User
     }

     input UserInput {
         firstname:String
         lastname:String
         age:Int
     }

     input TaskInput{
         title:String!
         description:String!
         number: Int
     }


` ;


export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})