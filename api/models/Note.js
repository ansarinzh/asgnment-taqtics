import mongoose from 'mongoose';

const Note = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    note: {
        type: String,
        required: false
    }
})

export default mongoose.model('Note', Note);