import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { Appbar } from "./component/AppBar";
import { AboutMe } from "./component/AboutMe";
import "./asset/fonts/font-awesome.min.css";
import "./asset/bootstrap/css/bootstrap.min.css";
import MySelf from "./component/MySelf";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/state";
import { PortofolioDetailModalComponent } from "./component/PortofolioDetailModalComponent";
import { composeWithDevTools } from "redux-devtools-extension";
import { PortofolioSection } from "./component/PortofolioSection";

function App() {
  var store = createStore(rootReducer, composeWithDevTools());
  return (
    <Provider store={store}>
      <div className="App">
        <Appbar />
        <PortofolioDetailModalComponent />
        <AboutMe />
        <PortofolioSection/>        
        <MySelf />
      </div>
    </Provider>
  );
}

export default App;

