import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'
import connectdatabase from "./connectDB/connection.js";


const port = (process.env.PORT || 6000)

connectdatabase(process.env.DBURI);


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
