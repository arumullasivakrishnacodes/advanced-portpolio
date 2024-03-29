import React from "react";
import "../Skills/Skills.css";
import { SkillData } from "../Data";

function Skills() {
  return (
    <div>
      <div className="heading">
        <p>Skills</p>
      </div>
      <div className="sills-container-main row">
        {SkillData.map((eachskill, index) => {
          return (
            <div className="col-6 p-3">
              <div className="single-skills-container" key={index}>
                <div className="heading-skill">{eachskill.title}</div>
                <div className="individual-skills-container">
                    {
                        eachskill.skills.map((individualskill, index) => {
                            return (
                                <div className="each-individual-skill" key={index}>{individualskill}</div>
                            );
                        })
                    }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
