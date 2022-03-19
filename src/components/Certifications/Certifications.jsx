import React from "react";
import "./Certifications.css";
import CertificationsGroups from "./CertificationsGroups/CertificationsGroups";
import {Sololearn, DIO} from "./CertificadosDados";

export default function Certifications(){

    return(
        <div>
            <h1 className="titleCertifications">
                Certificações
            </h1>
            <CertificationsGroups organization="Sololearn" course={Sololearn}/>
            <CertificationsGroups organization="Digital Innovation One" course={DIO}/>
            <div className="criadoPor">Criado Por Renan Castro</div>

        </div>
    )
}

// <CertificationsGroups organization="Digital Innovation One" course={name2}/>
