import React, { useState } from "react";
import "../Skills/Skills.css";
import { SkillData } from "../Data";

function Skills() {
  const [selectskill, setselectskill] = useState("0");

  const handleSkillSelect = (e) => {
    const selectedSkillIndex = e.target.id;
    setselectskill(selectedSkillIndex);
  };

  return (
    <div>
      <div className="heading-skills">
        <p>Skills</p>
      </div>
      <div className="skills-all-container row">
        <div className="col-4 p-0">
          <div className="skills-title-container d-flex flex-column">
            {SkillData.map((eachtitle, index) => {
              return (
                <div
                  onClick={handleSkillSelect}
                  className={`skill-title ${
                    Number(selectskill) === index ? "skill-title-active" : ""
                  }`}
                  key={index}
                  id={index}
                >
                  {eachtitle.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-8 p-0">
          {SkillData.map((skillitem, index) => {
            return (
              <div key={index} className={`individual-skill-main-con ${Number(selectskill) === index ? '': 'd-none'}`}>
                {skillitem.skills.map((indskillitem,index) => {
                  return (
                  <div key={index} className={`individual-skill-container mb-3 d-flex flex-column justify-content-start align-items-start individual-skill-${skillitem.class}`}>
                    <p className="m-0 mb-3">{indskillitem.split('|')[0]}</p>
                    <div className="skill-progressbar-outer mb-3">
                      <div className="skill-progressbar-inner" style={{width: `${indskillitem.split('|')[1]}%`}}></div>
                      <div className="skill-percent-popup" style={{left: `${indskillitem.split('|')[1]-6}%`}}>{indskillitem.split('|')[1]}%
                        <div className="triangle"></div>
                      </div>
                    </div>
                    
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

export default Skills;
