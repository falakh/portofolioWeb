import PortofolioProps from "../../dataType/portofolio";

export const OPEN_DIALOG = 'OPEN_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'


export interface OPEN_DIALOG {
   type : typeof OPEN_DIALOG,
   meta : PortofolioProps
}

export interface CLOSE_DIALOG{
    type: typeof CLOSE_DIALOG
}

export type UIActionTypes = OPEN_DIALOG | CLOSE_DIALOG
