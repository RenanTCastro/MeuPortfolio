import React from "react";
import "./CertificationsGroups.css";
import ShowHideButton from "../../../images/ShowHideButton.svg";

export default function CertificationsGroups(props){
    const name= props.organization;
    const showHide = props.showHide;
    const courseName = props.course;

    console.log(courseName)
    const listItems = courseName.map((courseName) =>
      <a href={courseName.link} target="_blank" rel="noreferrer" className="courseLink">                
        <p className="coursesName">{courseName.name}</p>
      </a>
    );
    
    function handleClick() {
        var x = document.getElementById(name);
        var y = document.getElementById(showHide);

        if (x.style.display === "block") {
          x.style.display = "none";
          y.style.transform ="rotate("+0+"deg)"; 
        } else {
          x.style.display = "block";
          y.style.transform ="rotate("+180+"deg)"; 
        }
      }
      
    return(
        <div class="top">
           <div className="certificationBackGround">
                <h3 className="organizationName">{name}</h3> 
                <button className="buttonShowHide" value="sololearn" onClick={handleClick}>
                    <img src={ShowHideButton} id={showHide} alt="Mostrar/Esconder certificações"/>     
                </button>    
            </div>
            <div className="courses" id={name}>
                  {listItems}
            </div>   
        </div>
    )
}