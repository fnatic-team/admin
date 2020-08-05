import { combineReducers } from "redux";
import admin from "./admin";
import speaker from "./speaker";

export default combineReducers({ admin, speaker });