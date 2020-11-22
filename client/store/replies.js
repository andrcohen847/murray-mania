import axios from 'axios'

//ACTION TYPES
const ADD_NEW_REPLY = 'ADD_NEW_REPLY'
const DELETE_REPLY = 'DELETE_REPLY'
const SET_REPLIES = 'SET_REPLIES'

//ACTION CREATORS
const setReplies = replies => ({
  type: SET_REPLIES,
  replies
})

const addNewReply = reply => ({
  type: ADD_NEW_REPLY,
  reply
})

const deleteAReply = replyId => ({
  type: DELETE_REPLY,
  replyId
})

//THUNKS
//Fetch all
export const fetchAllReplies = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/replies')
      dispatch(setReplies(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//ADD NEW REPLY
export const addReply = reply => {
  return async dispatch => {
    try {
      const {data: newReply} = await axios.post('/api/replies', reply)
      dispatch(addNewReply(newReply))
    } catch (err) {
      console.error(err)
    }
  }
}

//DELETE REPLY
export const deleteReply = replyId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/replies/${replyId}`)
      dispatch(deleteAReply(replyId))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_REPLIES:
      return action.replies
    case ADD_NEW_REPLY:
      return [...state, action.reply]
    case DELETE_REPLY:
      return state.filter(reply => reply.id !== action.replyId)
    default:
      return state
  }
}
