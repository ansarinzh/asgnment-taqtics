import {addNote, details, getNotes, updateNote} from './service';

export const createNote = async(req, res) => {
    try {
        await addNote(req.body);
        res.status(200).json({ success: true, message: "Note Added Successfully"})
    } catch (error) {
        res.status(400).json({ success: false, message: error.message})
    }
}


export const getAllNotes = async(req, res) => {
    try {
        const data = await getNotes();
        res.status(200).json({ success: true, data: data,  message: "Successfully Fetched"});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

export const editNote = async(req, res) => {
    try {
        await updateNote(req.body);
        res.status(200).json({success: true, message: "Record Updated successfully"});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

export const getDetail = async(req, res) => {
    try {
        const data = await details(req.query);
        res.status(200).json({success: true, data: data,  message: "Record fetched successfully"});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}