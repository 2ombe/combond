import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import companyRouter from './controller/Company.js';
import FranchiseTerm from './controller/franchiseTerm.js';
import uploadRouter from './controller/upload.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));

app.use(express.json());

app.use('/api/companies', companyRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/franchise', FranchiseTerm);
const __direname = path.resolve();
app.use(express.static(path.join(__direname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__direname, '/frontend/build/index.html'))
);

const PORT = process.env.PORT | 8000;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
