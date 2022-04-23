import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import addNotes from './routes/addNotes';
import getNotes from './routes/getNotes';
import update from './routes/update';
import details from './routes/details';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

/************** MONGODB CONNECTION ****************/
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useUnifiedTopology: true,
}).then(()=> console.log("Database Connected..."))
.catch(err => console.log(err));

app.use('/api', addNotes);
app.use('/api', getNotes);
app.use('/api', update);
app.use('/api', details);
const PORT = config.PORT;
app.listen(PORT, ()=> {
    console.log(`Server started at ${PORT}`);
})