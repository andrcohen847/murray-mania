import axios from 'axios'

//ACTION TYPES
const ADD_NEW_POST = 'ADD_NEW_POST'
const DELETE_POST = 'DELETE_POST'
const SET_POSTS = 'SET_POSTS'

//ACTION CREATORS
const setPosts = posts => ({
  type: SET_POSTS,
  posts
})

const addNewPost = post => ({
  type: ADD_NEW_POST,
  post
})

const deleteAPost = postId => ({
  type: DELETE_POST,
  postId
})

//THUNKS
//Fetch all
export const fetchAllPosts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/posts')
      dispatch(setPosts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//ADD NEW POST
export const addPost = post => {
  return async dispatch => {
    try {
      const {data: newPost} = await axios.post('/api/posts', post)
      dispatch(addNewPost(newPost))
    } catch (err) {
      console.error(err)
    }
  }
}

//DELETE POST
export const deletePost = postId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/posts/${postId}`)
      dispatch(deleteAPost(postId))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts
    case ADD_NEW_POST:
      return [...state, action.post]
    case DELETE_POST:
      return state.filter(post => post.id !== action.postId)
    default:
      return state
  }
}
