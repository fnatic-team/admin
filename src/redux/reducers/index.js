import { combineReducers } from "redux";
import admin from "./admin";
import speaker from "./speaker";
import audience from "./audience";
import newsletter from "./newsletter";


export default combineReducers({ admin, speaker, audience, newsletter });