import {tasks} from './sample'
import User from './model/User'

export const resolvers={
    Query:{
        hello: ()=>{
            return "hello wrold with graphql"
        },
        greet:(root,{name}, context)=>{
            console.log(context)
           return name
        },

        tasks: ()=>{
            return tasks
        },
        users: async ()=>{
           const user = await User.find()
           return user
        }
    
    },
    Mutation: {
        createtask:(root, {input})=>{
         input._id = tasks.length
          tasks.push(input)
          return input
        },

        createUser: async (_,{input})=>{
            const newUser = new User(input)
            await newUser.save();
            return newUser;
        },
         deleteUser:async (_, {_id})=>{
             const user = await User.findByIdAndDelete(_id);
             return user;
         },
         updateUser: async (_,{_id, input})=>{
              const user  = await User.findByIdAndUpdate(_id,input,{new:true})
              return user
         }
        
    }
}