import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './Routes/users.js';
import { recepiesRouter } from './Routes/recepie.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth', userRouter);
app.use('/recepies', recepiesRouter);

mongoose.connect(
  'your url'
);

app.listen(3001, () => console.log(`App is running on port 3001`));
