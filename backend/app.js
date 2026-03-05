import express from "express";
import userrouter from "./routes/UserRoute.js";
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users",userrouter);

app.get('/', (req, res) => {
    res.send('hi there')
})

export default app;