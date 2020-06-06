import UIState from "../state/UIState";
import { UIActionTypes, OPEN_DIALOG, CLOSE_DIALOG } from "../action/UIAction";

const initialState: UIState = {
    isDetailPortofolioModalOpen : false,
    showedPortofolioData : {
        explanation:"",
        image:"",
        name:"",
        github:"",
        link:"",
        tools:""
    }
  }
  
export function UIReducer(
state = initialState,
action : UIActionTypes
) : UIState{
switch (action.type) {
    case OPEN_DIALOG:
        return {
            ...initialState,isDetailPortofolioModalOpen: true,showedPortofolioData:action.meta
        }
    case CLOSE_DIALOG: 
    return {
        ...initialState,isDetailPortofolioModalOpen:false
    }
    default:
        return initialState
}
}