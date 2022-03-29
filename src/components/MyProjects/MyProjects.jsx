import React from "react";
import "./MyProjects.css";
import Carousel from "./Carousel/Carousel";

export default function MyProjects(){
    return(
        <div>
            <h1 className="titleQualifications">
                <span className="greenTitleQualification">
                    Meus
                </span>
                <span className="whiteTitleQualification">
                    Projetos
                </span>
            </h1>
            <Carousel/>
        </div>
    )
}