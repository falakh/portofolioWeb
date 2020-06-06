import React from "react";
import PortofolioProps from "../dataType/portofolio";
import "../asset/css/portofolioComponent.css"
import { RootState } from "../redux/state";
import { useSelector, useDispatch } from "react-redux";
import { changeModalShowStatus } from "../redux/action/UIActionList";

export default function Portofolio(portoflio : PortofolioProps) {
  var uiState = (state : RootState)=> state.ui
  // var reduxData = useSelector(uiState)
  var dispatch = useDispatch()
  return (
    <div style={{margin:20}} onClick={(event)=> dispatch(changeModalShowStatus(true,portoflio))}>
      <a
        className="d-block mx-auto portfolio-item"
        href="#portofoliomodal"
        data-target="#portofoliomodal"
        data-toggle="modal"
      >
        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
          <div className="my-auto portfolio-item-caption-content w-100 text-center text-white text">
            {/* <i className="fa fa-search-plus fa-3x"></i> */}
            <h1>{portoflio.name}</h1>
            <div>{portoflio.explanation}</div>
          </div>
        </div>
        <img
        alt="pediatric"
          className="img-fluid mx-auto d-block"
          src={portoflio.image }
          width={256}
          height={256}
          style={{height:256,width:256, overflow:"hidden"}}
          // src="https://lh3.googleusercontent.com/YHbnfNa449Vsk2BmrHVUBLfpwE4l7fnNaIPjHSr6YRRyOL4ajOlQM0JqhyxvDBP1gWg=s180-rw"
        />
         <h3 style={{textAlign:"center",textJustify:"inter-word",color:"black"}}>{portoflio.name}</h3>
      </a>
     
    </div>
  );
}
