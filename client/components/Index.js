/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as NavbarComp } from "./Navbar";
export { default as Home } from "./Home";
export { default as Footer } from "./Footer";
export { Login, Signup } from "./AuthForm";
export { default as Games } from "./Games";
export { default as MessageBoard } from "./MessageBoard"
export {default as UserProfile} from "./UserProfile"
export {default as Topic} from "./Topic"
export {default as SoundLab} from "./SoundLab"
