import express from 'express';
import Joi from 'joi';
import { getDetail } from '../modules/controller';


const app = express();
const validator = require('express-joi-validation').createValidator({});

const noteSchema = Joi.object({
    _id: Joi.string().required().label("Note Id"),
});

app.get('/note/details', validator.query(noteSchema), getDetail)

export default app;