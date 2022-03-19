import React from "react";
import "./Header.css";
import LinkedinIcon from "../../images/IconesHeader/linkedin.svg"
import GitHubIcon from "../../images/IconesHeader/github.svg";
import GmailIcon from "../../images/IconesHeader/gmail.svg"

export default function Header(){
    return(
        <div className="headerBackground">
            <div className="iconesContato">
                <a href="https://www.linkedin.com/in/renancastrot/" target="_blank" rel="noreferrer">
                    <img src={LinkedinIcon} alt="Icone Linkedin"/>
                </a>
                <a href="https://github.com/RenanTCastro" className="marginRightAndLeft" target="_blank" rel="noreferrer">
                    <img src={GitHubIcon} alt="Icone Linkedin"/>
                </a>
                <a href="mailto:renancastrotut@gmail.com">
                    <img src={GmailIcon} alt="Icone Linkedin"/>
                </a>
            </div>

            <div className="secoes">
                <a className="secoesName"> Sobre</a>
                <a className="secoesName marginRightAndLeft"> Qualificações</a>
                <a className="secoesName"> Projetos</a>
                <a className="secoesName certificacoesMargin"> Certificações</a>
            </div>
        </div>
    )
}