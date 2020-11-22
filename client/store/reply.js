import axios from 'axios'

//ACTION TYPES
const UPDATE_A_REPLY = 'UPDATE_A_REPLY'
const SET_SINGLE_REPLY = 'SET_SINGLE_REPLY'

//ACTION CREATORS

const updateAReply = updatedReply => ({
  type: UPDATE_A_REPLY,
  updatedReply
})

const setSingleReply = reply => ({
  type: SET_SINGLE_REPLY,
  reply
})

//THUNKS

//SINGLE REPLY
export const fetchSingleReply = replyId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/replies/${replyId}`)
      dispatch(setSingleReply(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//EDIT REPLY
export const updateReply = (replyId, newInfo) => {
  return async dispatch => {
    try {
      const {data: updatedReply} = await axios.put(
        `/api/replies/${replyId}`,
        newInfo
      )
      dispatch(updateAReply(updatedReply))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = {}

export default function reply(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_REPLY:
      return action.reply
    case UPDATE_A_REPLY:
      return action.updatedReply
    default:
      return state
  }
}
