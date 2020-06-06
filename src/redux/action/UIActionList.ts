import { UIActionTypes, OPEN_DIALOG, CLOSE_DIALOG } from "./UIAction"
import PortofolioProps from "../../dataType/portofolio"

export function changeModalShowStatus(newModalStatus : boolean,portofolioProps:PortofolioProps) : UIActionTypes{
    // console.log(newModalStatus)
    if(newModalStatus){
        return{
            type:OPEN_DIALOG,
            meta:portofolioProps
        }
    }else{
        return{
            type:CLOSE_DIALOG
        }
    }
}