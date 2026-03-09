import express from "express";
import userrouter from "./routes/UserRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


//parsing methods
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//cors allowation
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));

//cookie-parsing
app.use(cookieParser());

//routingg
app.use("/api/users",userrouter);

app.get('/', (req, res) => {
    res.send('hi there')
})

export default app;