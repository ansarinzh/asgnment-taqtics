import express from 'express';
import Joi from 'joi';
import { editNote } from '../modules/controller';


const app = express();
const validator = require('express-joi-validation').createValidator({});

const noteSchema = Joi.object({
    _id: Joi.string().required().label("Note Id"),
    title: Joi.string().allow('', null).label('Title'),
    note: Joi.string().allow('', null).label('Notes'),
    date: Joi.date().allow('', null).label('Date')
});

app.post('/note/update', validator.body(noteSchema), editNote)

export default app;