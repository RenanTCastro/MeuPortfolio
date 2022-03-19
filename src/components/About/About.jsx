import React from "react";
import "./About.css";
import Foto from "../../images/Foto.svg"
export default function About(){
    return(
        <div className="about">
            <div className="imgPos">
                <img src={Foto} alt="Foto de Renan Castro"/>
            </div>
            <div className="divAbout">
                <h1 className="greenTitle">
                    I'm Renan Castro
                    <h1 className="whiteTitle">
                    Front-end Web
                        <h1 className="whiteTitle">Developer</h1>
                    </h1>
                </h1>
                <p className="paragrafoAbout">
                     Sou estudante do curso de Engenharia de Controle e
                    Automação da UFMG, já trabalhei com desenvolvimento web
                    na Consultória e Projetos Elétrico Júnior, onde fui consultor de
                    tecnologia. E, atualmente, estou me qualificando no 
                    Desenvolvimento Front-end, a fim de alcançar os meus 
                    objetivos pessoais e profissionais.
                </p>
            </div>
        </div>
    )
}