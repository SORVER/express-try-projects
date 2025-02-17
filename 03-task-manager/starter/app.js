const express = require('express')
const tasks = require('./routes/tasks')
const mongose = require('mongoose');
const connectDB = require('./db/connect.js')
const path = require('path')
require('dotenv').config();


const app = express()
const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.DB_URL)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
          );
    } catch (error) {
         console.log(error);
    }

}



// middleware

// making every comming request in json
app.use(express.json())
// running the clinet side in the same port
app.use(express.static(path.join(__dirname, 'public')))
 
// get    /api/v1/tasks     - get all tasks
// post   /api/v1/tasks     - create a new task
// get    /api/v1/tasks/:id - get a single task
// put    /api/v1/tasks/:id - update task
// delete /api/v1/tasks/:id - delete task


// routes
app.use('/api/v1/tasks', tasks)

start()
