import React from "react";
import "./Certifications.css";
import CertificationsGroups from "./CertificationsGroups/CertificationsGroups";
import {Sololearn, DIO} from "./CertificadosDados";

export default function Certifications(){

    return(
        <div>
            <h1 className="titleCertifications" id="certifications">
                Certificações
            </h1>
            <CertificationsGroups 
                organization="Sololearn" 
                course={Sololearn}
                showHide="1"
            />
            <CertificationsGroups 
                organization="Digital Innovation One" 
                course={DIO}
                showHide="2"
            />
            <div className="criadoPor">Criado Por Renan Castro</div>

        </div>
    )
}

// <CertificationsGroups organization="Digital Innovation One" course={name2}/>
