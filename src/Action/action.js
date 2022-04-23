import { ADD_NOTE, GET_NOTE, UPDATE_NOTE } from '../constant';
import axios from 'axios';

// export const addNote = (payload) => {
//     return {
//         type: ADD_NOTE,
//         payload
//     }
// }

export const addNote = (payload) => {   
    return (dispatch) => {  
      axios.post(`http://localhost:3333/api/note/create`,
       payload)
        .then((res) => {
          console.log("res", res.data);
  
          dispatch({
              // response
            type: ADD_NOTE,
            payload
          });
        })
  
        .catch((err) => {
          console.log("err", err); 
          ///erross= ==> dispatch()
        });
    };
  };

  export const getAllNotes = () => {
    return (dispatch) => {
      axios.get('http://localhost:3333/api/note/getNote')
      .then((resp) => {
        dispatch({
          type: GET_NOTE,
          payload: resp.data
        });
      })
      .catch(err => {
        console.log(err)
      });
    };
  };


  export const editNote = (payload) => {   
    return (dispatch) => {  
      axios.post(`http://localhost:3333/api/note/update`,
       payload)
        .then((res) => {
          console.log("res", res.data);
  
          dispatch({
              // response
            type: UPDATE_NOTE,
            payload
          });
        })
  
        .catch((err) => {
          console.log("err", err); 
          ///erross= ==> dispatch()
        });
    };
  };

