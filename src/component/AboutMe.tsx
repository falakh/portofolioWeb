import React from "react";

export function AboutMe() {
  var addres = "pp.jpg";
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container">
        <img
          width={256}
          alt="my self"
          height={256}
          className="img-fluid d-block mx-auto mb-5 rounded-circle"
          src={addres}
         
        />
        <h1 >Zulfikar Fahmi Falakh</h1>
        <hr className="star-light" />
        <h2 className="font-weight-light mb-0"  >
          Web Developer - Android Developer&nbsp;
        </h2>
      </div>
    </header>
  );
}
