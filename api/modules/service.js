import Note from '../models/Note';

export const addNote = async payload => {
    return await Note.create(payload)
    .then(data=>{
        return data;
    }).catch(err => {
        console.log(err);
    })
};

export const getNotes = async data =>{
    return await Note.find({}).then(data => {
        return data;
    }).catch(er=>{
        console.log(er);
    })
} 

export const updateNote = async payload => {
    const data = Object.assign({}, payload);
    delete payload._id;
    return await Note.findOneAndUpdate({_id: data._id}, data)
    .then(x=> {
        return x;
    });
}

export const details = async payload => {
    return await Note.findOne({_id: payload._id})
    .then(data=> {
        return data;
    }).catch(err => {
        console.log(err);
    })
}