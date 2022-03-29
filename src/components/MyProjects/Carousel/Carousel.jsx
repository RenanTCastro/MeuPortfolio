import React, { useEffect, useState } from "react";
import "./Carousel.css";
import ProjetoConversorMoeda from "../../../images/Projetos/ProjetoConversorMoeda.svg";
import ProjetoConversorBinToDec from "../../../images/Projetos/ProjetoConversorBinToDec.svg";
import githubfinduser from "../../../images/Projetos/githubfinduser.png";

export default function Carousel(){
    const [slideIndex,setSlideIndex] = useState(0);
    let x = document.getElementsByClassName("itens");

    useEffect(() => {
        let i;
        console.log(x[2].style)
        if (window.screen.width < 450){
            x[1].style.display = "none";
            x[2].style.display = "none";
        }
        for (i = 0; i < x.length; i++) {
           if(i === slideIndex ){
                x[i].style.display = "block";

                let next;
                slideIndex === x.length-1 ? next = 0 : next = i+1;
                if (window.screen.width > 450){
                    x[next].style.display = "block";
                }
                if(next === 0 && window.screen.width > 450){
                    document.getElementById("main").style.flexDirection = "row-reverse"
                }else{
                    document.getElementById("main").style.flexDirection = "row"

                }
                for (let j = 0; j < x.length; j++) {
                    if(j !== slideIndex && j !== next){
                        x[j].style.display = "none";
                    }
                }
           }
        }
    },[slideIndex,x]);

    function plusDivs(e) {
        if(e.target.value === "right"){
            setSlideIndex(slideIndex === x.length-1 ? 0 : slideIndex + 1 )
        }else if(e.target.value === "left"){
            setSlideIndex(slideIndex === 0 ? x.length : slideIndex - 1 )
        }
    }
      
    return(
        <div className="Carousel">
         <button class="buttonProjects" value="left" onClick={plusDivs}>&#10094;</button>
            <div className="CarouselItens" id="main">
            <div className="itens">
                    <a href="https://xenodochial-ritchie-db3c4b.netlify.app/" target="_blank" rel="noreferrer" className="titleProjects">
                        <h1>Conversor de moeda</h1>
                        <img src={ProjetoConversorMoeda} alt="Projeto" className="projectsImg"/>
                        <p className="paragrafoProjects">
                            Uma ferramenta simples que transforma o valor inserido pelo 
                            usuário de Dólar para Real e vice-versa, fazendo o uso de 
                            uma API externa.
                        </p>
                    </a>
                </div>
                    
                <div className="itens">
                    <a href="https://exquisite-phoenix-a3bbab.netlify.app/" target="_blank" rel="noreferrer" className="titleProjects">
                        <h1>GitHub Find User</h1>
                        <img src={githubfinduser} alt="Projeto" className="projectsImg"/>
                        <p className="paragrafoProjects">
                        Esse projeto criado em ReactJs faz o uso da API do GitHub para 
                        buscar os usuários e mostrar algumas informações do seu perfil.
                        </p>
                    </a>
                </div>

                <div className="itens">
                    <a href="https://lucid-colden-937451.netlify.app/" target="_blank" rel="noreferrer" className="titleProjects">
                        <h1>BinToDec</h1>
                        <img src={ProjetoConversorBinToDec} alt="Projeto" className="projectsImg"/>
                        <p className="paragrafoProjects">
                            Esse é uma ferramente que possibilita o usuário converter um
                            número binário para decimal e vice-versa.
                        </p>
                    </a>
                </div>
            </div>
            <button class="buttonProjects" value="right" onClick={plusDivs}>&#10095;</button>
        </div>
    )
}