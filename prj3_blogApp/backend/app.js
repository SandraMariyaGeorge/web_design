import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

const app = express();

app.use(express.json());
//lmHBYZFvpcDrZ9VN
app.use("/api/user",router); //http://localhost:5000/api/user/
app.use("/api/blog",blogRouter); //http://localhost:5000/api/blog/

mongoose.connect('mongodb+srv://admin123:lmHBYZFvpcDrZ9VN@cluster0.s8oyi.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => app.listen(5000))
.then(() => console.log('connected to db and listening to port 5000'))
.catch((err) => console.log(err));

