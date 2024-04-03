import React from "react";
import '../Education/Education.css';

function Education () {
    return (
      <div style={{position: "relative"}}>
        <div className="education-main-container">
          <div className="each-education-container">
            <h3>Bachelor of Technology in Mechanical Engineering</h3>
            <h3>YOGI VEMANA UNIVERSITY</h3>
            <p>KADAPA, AP, INDIA</p>
            <p>2017 - 2021</p>
            <div className="percentage">Percentage : 87%</div>
            <div className="popup-triangle"></div>
          </div>
          <div className="each-education-container">
            <h3>InterMediate Education</h3>
            <h3>Sri Chaitanya Educational Institute</h3>
            <p>NELLORE, AP, INDIA</p>
            <p>2015 - 2017</p>
            <div className="percentage">Percentage : 96.8%</div>
            <div className="popup-triangle"></div>
          </div>
          <div className="each-education-container">
            <h3>Secondary School Education</h3>
            <h3>APSWERIS</h3>
            <p>NELLORE, AP, INDIA</p>
            <p>2014 - 2015</p>
            <div className="percentage">Percentage : 93%</div>
            <div className="popup-triangle"></div>
          </div>
        </div>
        <div className="timeline-container">
          <div className="timeline">
            <div className="ed-icons">A</div>
            <div className="ed-icons">A</div>
            <div className="ed-icons">A</div>
          </div>
        </div>
      </div>
    );
}

export default Education;