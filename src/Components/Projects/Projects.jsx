import React, { useState } from "react";
import '../Projects/Projects.css';
import { MyprojectTechnologies } from '../Data';
import { MyProjects } from '../Data';

function Projects () {
    const [getSelectTech, setSelectTech] = useState('All');
    const [getfilteredData, setFilteredData] = useState(MyProjects);

    const handletechSelct = (e) => {
        var getselectTech = e.target.innerText;
        setSelectTech(getselectTech);
        const filteredData = MyProjects.filter((eachfilteredprojects) => {
            if (getselectTech === 'All') {
                return eachfilteredprojects;
            } else {
                return eachfilteredprojects.tech === getselectTech;
            }
        });
        setFilteredData(filteredData);
    }

    return (
        <div>
            <div className="heading-projects">
                <p>Projects</p>
            </div>
            <div className="projects-technologies-container mb-5">
            <div onClick={handletechSelct} className={`project-tech-title ${getSelectTech === 'All' ? 'tech-active' : ''}`}><i class="bi bi-globe"></i>All</div>
                {
                    MyprojectTechnologies.map((eachtech) => {
                        return (
                            <div onClick={handletechSelct} className={`project-tech-title ${getSelectTech === eachtech.tech ? 'tech-active' : ''}`}><img src={eachtech.image} alt={eachtech.tech} />{eachtech.tech}</div>
                        );
                    })
                }
            </div>
            <div className="projects-details-container">
                {
                    getfilteredData.map((eachdetail) => {
                        return (
                            <div className="project-details-section">
                                <img src={eachdetail.image1} alt={eachdetail.title} />
                                <p className="project-title">{eachdetail.title}</p>
                                <p className="project-desc">{eachdetail.description}</p>
                                <div className="eachtech-container d-flex">
                                    {
                                        eachdetail.technologies.map((eachtech) => {
                                            return (
                                                <div className="eachproject-tech">{eachtech}</div>
                                            )
                                        })
                                    }
                                </div>
                                <a className="project-redirect-btn" href={eachdetail.redirect} target="_blank" rel="noreferrer">EXPLORE <i class="bi bi-box-arrow-up-right"></i></a>
                            </div>
                        ) 
                    })
                }
            </div>
        </div>
    );
}

export default Projects;