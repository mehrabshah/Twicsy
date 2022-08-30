import changefollowersValue from "./Followers_Move";
import changeLikeValue from "./Likes_Move";
import changeViewsValue from "./Views_Move";
import { combineReducers } from "redux";

const rootReducers=combineReducers(
 {
    changefollowersValue,changeLikeValue,changeViewsValue

 }
)
export default rootReducers;