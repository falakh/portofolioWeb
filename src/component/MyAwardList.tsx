import React from "react";
import { AwardProps } from "../dataType/AwardComponentProps";

export class MyAwardList extends React.Component {
  render() {
    return (
      <section>
        <h2 className="text-uppercase text-center text-secondary">My Award</h2>
        <hr className="star-dark mb-5"></hr>
      </section>
    );
  }
}

export class MyAwardSinggleComponent extends React.Component<AwardProps> {
  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="col">
            <div>
              <img src={this.props.image} alt={this.props.name}></img>
            </div>
            <div>
              <h3> lasda </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
