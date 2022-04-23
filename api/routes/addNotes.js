import express from 'express';
import Joi from 'joi';
import { createNote } from '../modules/controller';


const app = express();
const validator = require('express-joi-validation').createValidator({});

const noteSchema = Joi.object({
    title: Joi.string().required().label('Title'),
    note: Joi.string().required().label('Notes'),
    date: Joi.date().required().label('Date')
});

app.post('/note/create', validator.body(noteSchema), createNote)

export default app;