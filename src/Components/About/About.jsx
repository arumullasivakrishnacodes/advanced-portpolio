import React from "react";
import profilephoto from '../../Assets/Images/My-photo.png';
import '../About/About.css';
import MyResume from '../../Assets/arumullasivakrishna.pdf'

function About () {
    return (
        <div className="about-component-container">
            <div className="profile-image-container mb-3">
                <img src={profilephoto} alt="" />
            </div>
            <div className="name-role-connect-container mb-4">
                <p className="name m-0">Arumulla SivaKrishna</p>
                <p className="role m-0">FullStack Developer</p>
                <div className="social-connect w-100 d-flex justify-content-center align-items-center">
                <i class="bi bi-whatsapp"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
                </div>
            </div>
            <div className="contact-details-section d-flex justify-content-start align-items-center mb-4">
                <div className="mobile-contact d-flex">
                    <i class="bi bi-phone"></i>
                    <div className="static-details d-flex justify-content-start flex-column">
                        <p className="m-0">Phone</p>
                        <p className="m-0">+91 9398638314</p>
                    </div>
                </div>
                <div className="mobile-contact d-flex">
                    <i class="bi bi-envelope"></i>
                    <div className="static-details d-flex justify-content-start flex-column">
                        <p className="m-0">Email</p>
                        <p className="m-0">arumullasivakrishna@outlook.com</p>
                    </div>
                </div>
                <div className="mobile-contact d-flex">
                    <i class="bi bi-geo-fill"></i>
                    <div className="static-details d-flex justify-content-start flex-column">
                        <p className="m-0">Location</p>
                        <p className="m-0">Nellore, AP, India</p>
                    </div>
                </div>
                <div className="mobile-contact d-flex">
                    <i class="bi bi-github"></i>
                    <div className="static-details d-flex justify-content-start flex-column">
                        <p className="m-0">Github</p>
                        <a className="m-0" href="https://github.com/arumullasivakrishnacodes?tab=repositories">arumullasivakrishnacodes</a>
                    </div>
                </div>
            </div>
            <div className="resume-con">
                <a href={MyResume} download><button>Resume <i class="bi bi-download"></i></button></a>
            </div>

        </div>
    );
}

export default About;