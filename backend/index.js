import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'
import connectDB from "./connection/connection.js";


const port = (process.env.PORT || 6000)

connectDB(process.env.DBURI);


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
