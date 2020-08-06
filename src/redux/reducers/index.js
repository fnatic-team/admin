import { combineReducers } from "redux";
import admin from "./admin";
import speaker from "./speaker";
import audience from "./audience";
import newsletter from "./newsletter";
import transaction from "./transaction";


export default combineReducers({ admin, speaker, audience, newsletter, transaction });