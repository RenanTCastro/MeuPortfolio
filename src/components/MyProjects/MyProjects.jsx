import React from "react";
import "./MyProjects.css";
import ProjetoConversorMoeda from "../../images/Projetos/ProjetoConversorMoeda.svg";
import ProjetoConversorBinToDec from "../../images/Projetos/ProjetoConversorBinToDec.svg";

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
            <div className="divProjects">
                <div className="projects">
                    <a href="https://xenodochial-ritchie-db3c4b.netlify.app/" target="_blank" rel="noreferrer" className="titleProjects">
                        <h1>Conversor de moeda</h1>
                        <img src={ProjetoConversorMoeda} alt="Projeto"/>
                        <p>
                            Uma ferramenta simples que transforma o valor inserido pelo 
                            usuário de Dólar para Real e vice-versa, fazendo o uso de 
                            uma API externa.
                        </p>
                    </a>
                </div>
                
                <div className="projects">
                    <a href="https://lucid-colden-937451.netlify.app/" target="_blank" rel="noreferrer" className="titleProjects">
                        <h1>BinToDec</h1>
                        <img src={ProjetoConversorBinToDec} alt="Projeto"/>
                        <p>
                            Esse é uma ferramente que possibilita o usuário converter um
                            número binário para decimal e vice-versa.
                        </p>
                    </a>
                </div>
            </div>

        </div>
    )
}