import express from 'express';
import Joi from 'joi';
import { getAllNotes } from '../modules/controller';


const app = express();

app.get('/note/getNote', getAllNotes);

export default app;