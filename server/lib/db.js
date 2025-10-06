import mongoose from 'mongoose';


//unction to connect to mongodb
const MONGODB_URI=process.env.MONGODB_URI;
export const connectDB=async()=>{
    try{
        mongoose.connection.on('connected',()=>{
            console.log('Database connected');
        })
        await mongoose.connect(`${MONGODB_URI}/chat-app`)

    }
    catch(error){
        console.log(error);
        

    }
}