import axios from 'axios'

//ACTION TYPES
const UPDATE_A_POST = 'UPDATE_A_POST'
const SET_SINGLE_POST = 'SET_SINGLE_POST'

//ACTION CREATORS

const updateAPost = updatedPost => ({
  type: UPDATE_A_POST,
  updatedPost
})

const setSinglePost = post => ({
  type: SET_SINGLE_POST,
  post
})

//THUNKS

//SINGLE POST
export const fetchSinglePost = postId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/posts/${postId}`)
      dispatch(setSinglePost(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//EDIT POST
export const updatePost = (postId, newInfo) => {
  return async dispatch => {
    try {
      const {data: updatedPost} = await axios.put(
        `/api/posts/${postId}`,
        newInfo
      )
      dispatch(updateATopic(updatedPost))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = {}

export default function post(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_POST:
      return action.post
    case UPDATE_A_POST:
      return action.updatedPost
    default:
      return state
  }
}
