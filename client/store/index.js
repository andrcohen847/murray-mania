import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";
import users from './users'
import usersadmin from  "./users-admin"
import userprofile from "./user-profile"
import topics from './topics'
import topic from './topic'
import posts from './posts'
import post from './post'
import replies from './replies'
import reply from './reply'



const reducer = combineReducers({
  user,
  users,
  usersadmin,
  userprofile,
  topics,
  topic,
  posts,
  post,
  replies,
  reply
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./user";
export * from "./users";
export * from "./users-admin"
export * from "./user-profile"
export * from './topics'
export * from './topic'
export * from './posts'
export * from './post'
export * from './replies'
export * from './reply'

