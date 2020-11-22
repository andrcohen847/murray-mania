import axios from 'axios'

//ACTION TYPES
const ADD_NEW_TOPIC = 'ADD_NEW_TOPIC'
const DELETE_TOPIC = 'DELETE_TOPIC'
const SET_TOPICS = 'SET_TOPICS'

//ACTION CREATORS
const setTopics = topics => ({
  type: SET_TOPICS,
  topics
})

const addNewTopic = topic => ({
  type: ADD_NEW_TOPIC,
  topic
})

const deleteATopic = topicId => ({
  type: DELETE_TOPIC,
  topicId
})

//THUNKS
//Fetch all
export const fetchAllTopics = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/topics')
      dispatch(setTopics(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//ADD NEW TOPIC
export const addTopic = topic => {
  return async dispatch => {
    try {
      const {data: newTopic} = await axios.post('/api/topics', topic)
      dispatch(addNewTopic(newTopic))
    } catch (err) {
      console.error(err)
    }
  }
}

//DELETE TOPIC
export const deleteTopic = topicId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/topics/${topicId}`)
      dispatch(deleteATopic(topicId))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOPICS:
      return action.topics
    case ADD_NEW_TOPIC:
      return [...state, action.topic]
    case DELETE_TOPIC:
      return state.filter(topic => topic.id !== action.topicId)
    default:
      return state
  }
}
