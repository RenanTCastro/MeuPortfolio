import React from "react";
import "./Qualifications.css";
import JavascriptIcon from "../../images/Tecnologias/Javascript.svg";
import CSSIcon from "../../images/Tecnologias/CSS.svg";
import HTMLIcon from "../../images/Tecnologias/HTML.svg";
import ReactIcon from "../../images/Tecnologias/React.svg";
import GitIcon from "../../images/Tecnologias/GIT.svg";
import WordpressIcon from "../../images/Tecnologias/Wordpress.svg";
import ReduxIcon from "../../images/Tecnologias/Redux.svg";
import TypescriptIcon from "../../images/Tecnologias/Typescript.svg";
import NodeIcon from "../../images/Tecnologias/Node.svg";
import PostgreIcon from "../../images/Tecnologias/PostgreSQL.svg";

export default function Qualifications(){
    return(
        <div>
            <h1 className="titleQualifications" id="qualifications">
                <span className="greenTitleQualification">
                    Minhas
                </span>
                <span className="whiteTitleQualification">
                    Qualificações
                </span>
            </h1>

            <h3 className="subtitulosQualifications">
                Tecnologias
            </h3>
            <div className="divIcons">
                <img src={JavascriptIcon} alt="Javascript icone"/>
                <img src={CSSIcon} alt="CSS icone"/>
                <img src={HTMLIcon} alt="HTML icone"/>
                <img src={ReactIcon} alt="React icone"/>
                <img src={GitIcon} alt="Git icone"/>
                <img src={WordpressIcon} alt="Wordpress icone"/>
            </div>
            <h3 className="subtitulosQualifications">
                Estudando
            </h3>
            <div className="divIcons">
                <img src={ReactIcon} alt="React icone"/>
                <img src={ReduxIcon} alt="Redux icone"/>
            </div>
            <h3 className="subtitulosQualifications">
                Próximos
            </h3>
            <div className="divIcons" id="projects">
                <img src={TypescriptIcon} alt="Typescript icone"/>
                <img src={NodeIcon} alt="Node Js icone"/>
                <img src={PostgreIcon} alt="PostgreSQL icone"/>
            </div>
        </div>
    )
}