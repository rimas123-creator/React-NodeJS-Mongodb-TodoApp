const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Task = require('./models/Task');
dotenv.config();

// convert incoming request to json object
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port , ()=> {
    console.log(`Application listening on port : ${port}`);
});

app.get('/', (req,res)=> {
    res.send(`Hi From NodeJS Server...`);
});


// Connect to MongoDB
const DB_URL = process.env.DB_URL || 'http://localhost';
mongoose.connect(DB_URL)
.then(
    console.log("Connected to MongoDB Successfully...")
)
.catch((err)=> {
    console.error("Error connecting to MongoDB:", err);
} );

// get all tasks
app.get('/get', (req,res) => {
    Task.find()
    .then(result => res.json(result))
    .catch((err) => res.json(err));
})

// update task 
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    Task.findByIdAndUpdate(id, { done: true })
      .then(result => res.json(result))
      .catch(err => res.json(err));
});


// post all tasks
app.post('/add', (req,res) => {
    const task = req.body.task;
    Task.create({
        task: task
    }).then(result => res.json(result))
    .catch((err) => res.json(err));
})

// delete task
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    Task.findByIdAndDelete(id)
     .then(result => res.json(result))
     .catch((err) => res.json(err));
})

