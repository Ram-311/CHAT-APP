import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';


const app=express();
const server=http.createServer(app);

//Initialise socket.io server 
export const io=new Server(server,{
    cors:{origin:"*"}
})

// Store online users
export const userSocketMap={}; // {userId,socketId}

// Socket.io connection handler
io.on('connection',(socket)=>{
    const userId=socket.handshake.query.userId;
    console.log("User Connected",userId);
    if(userId){
        userSocketMap[userId]=socket.id;
    }
    //Emit online users to all connected users
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
    socket.on("disconnect",()=>{
        console.log("User Disconnected",userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })


})
//middleware setup
app.use(express.json({limit:"4mb"}));
import cors from "cors";

app.use(
  cors({
    origin: [
      "https://chat-app-backend-zeta-bice.vercel.app/", // ✅ your Vercel frontend domain
      "http://localhost:5173",                 // ✅ keep for local dev
    ],
    credentials: true,
  })
);




// Route setup
app.use('/api/status',(req,res)=>{
    res.send("Server is live");
})

app.use('/api/auth',userRouter);
app.use('/api/messages',messageRouter);

//connect to mongodb

await connectDB();
if(process.env.MODE_ENV!=="production"){
    const PORT=process.env.PORT || 5000;

    server.listen(PORT,()=>{
        console.log(`server is running on port:  ${PORT}`)
    })
     
}

export default server;





