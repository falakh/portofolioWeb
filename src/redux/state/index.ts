import { combineReducers } from "redux";
import { UIReducer } from "../reducer/UIReducer";
export const rootReducer = combineReducers({
    ui: UIReducer
})
export type RootState = ReturnType<typeof rootReducer>
