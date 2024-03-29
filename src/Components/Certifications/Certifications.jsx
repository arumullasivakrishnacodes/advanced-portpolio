import React from "react";
import '../Certifications/Certification.css';
import {MyCertificates} from '../Data'

function Certification () {
    return (
      <div>
        <div className="heading">
          <p>Certifications</p>
        </div>
        <div className="certificates-container">
        {
            MyCertificates.map((eachcertificate,index) => {
                return (
                    <div className="single-certificate" key={index}>
                        {eachcertificate}
                    </div>
                )
            })
        }
        </div>
      </div>
    );
}

export default Certification;