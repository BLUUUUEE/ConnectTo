import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"



dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// app.get("/",(req,res)=>{
//     res.send("Hello");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

 // to parse incoming req with json payloads






app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)});