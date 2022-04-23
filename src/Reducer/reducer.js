import {
    ADD_NOTE,
    GET_NOTE,
    UPDATE_NOTE,
} from '../constant';

const Initial_State = {
    data: null,
    loading: false,
    errors: {},
  };
const NoteReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload]
        case GET_NOTE:
            return action.payload;
        case UPDATE_NOTE:
            return [...state, action.payload]
    }
    return state=[];
}




export default NoteReducer;