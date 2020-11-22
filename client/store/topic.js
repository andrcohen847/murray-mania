import axios from 'axios'

//ACTION TYPES
const UPDATE_A_TOPIC = 'UPDATE_A_TOPIC'
const SET_SINGLE_TOPIC = 'SET_SINGLE_TOPIC'

//ACTION CREATORS

const updateATopic = updatedTopic => ({
  type: UPDATE_A_TOPIC,
  updatedTopic
})

const setSingleTopic = topic => ({
  type: SET_SINGLE_TOPIC,
  topic
})

//THUNKS

//SINGLE TOPIC
export const fetchSingleTopic = topicId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/topics/${topicId}`)
      dispatch(setSingleTopic(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//EDIT TOPIC
export const updateTopic = (topicId, newInfo) => {
  return async dispatch => {
    try {
      const {data: updatedTopic} = await axios.put(
        `/api/topics/${topicId}`,
        newInfo
      )
      dispatch(updateATopic(updatedTopic))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = {}

export default function topic(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_TOPIC:
      return action.topic
    case UPDATE_A_TOPIC:
      return action.updatedTopic
    default:
      return state
  }
}
