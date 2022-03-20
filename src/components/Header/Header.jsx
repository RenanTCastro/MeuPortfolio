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
                    <img src={LinkedinIcon} alt="Icone Linkedin" className="iconsHeader"/>
                </a>
                <a href="https://github.com/RenanTCastro" className="marginRightAndLeft" target="_blank" rel="noreferrer">
                    <img src={GitHubIcon} alt="Icone Linkedin" className="iconsHeader"/>
                </a>
                <a href="mailto:renancastrotut@gmail.com">
                    <img src={GmailIcon} alt="Icone Linkedin" className="iconsHeader"/>
                </a>
            </div>

            <div className="secoes">
                <a className="secoesName" href="#about"> Sobre</a>
                <a className="secoesName marginRightAndLeft" href="#qualifications"> Qualificações</a>
                <a className="secoesName" href="#projects"> Projetos</a>
                <a className="secoesName certificacoesMargin" href="#certifications"> Certificações</a>
            </div>
        </div>
    )
}