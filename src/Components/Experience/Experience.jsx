import React, { useState } from "react";
import '../Experience/Experience.css';
import { ExperienceData } from '../Data';

function Experience () {
    const [selectexp, setSelectExp] = useState('0');

    const handleExpSelect = (e) => {
        setSelectExp(e.target.id)
    }

    return (
      <div>
        <div className="heading-experience">
          <p>Experience</p>
        </div>
        <div className="experience-main-component d-flex">
          <div className="experience-title-container">
            {ExperienceData.map((exptitle, index) => {
              return (
                <div
                  onClick={handleExpSelect}
                  id={index}
                  className={`experience-each-title ${
                    Number(selectexp) === index ? "exptitle-active" : ""
                  }`}
                >
                  {exptitle.title}
                </div>
              );
            })}
          </div>
          <div className="experience-points-description-con">
            {ExperienceData.map((eachexpcon, index) => {
              return (
                <div
                  className={`each-experience-points-con ${
                    Number(selectexp) === index ? "exp-points-active" : "d-none"
                  }`}
                  key={index}
                >
                  <div className="experience-technology">{eachexpcon.role}</div>
                  <div className="experience-year">{eachexpcon.year}</div>
                  {eachexpcon.work.map((eachexpeachpoint) => {
                    return (
                      <div className={`each-exp-eachpoints-container`}>
                        <i class="bi bi-x-diamond-fill"></i> {eachexpeachpoint}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Experience;