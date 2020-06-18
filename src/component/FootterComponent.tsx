import React from "react";
import { LinkIconComponent, GitHubIconComponent } from "./LinkIconComponent";

export class FootterComponent extends React.Component{
    
    render(){
        return <section className="bg-primary" >
            <div className="row ">
                <div className="col">
                    {GitHubIconComponent("test")}
                </div>
                <div className="col">

                </div>
            </div>
        </section>
    }

}
