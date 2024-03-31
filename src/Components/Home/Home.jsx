import React from "react";
import "../Home/Home.css";

function Home() {
  return (
    <div>
      <div className="heading-home">
        <p>About</p>
      </div>
      <div className="about-desc mb-3">
        Passionate Frontend Developer with a keen eye for detail and a creative
        flair. Proficient in crafting pixel-perfect, responsive web experiences
        using cutting-edge technologies such as HTML5, CSS3, and JavaScript.
        Dedicated to staying ahead of industry trends and committed to
        delivering visually stunning and user-friendly interfaces. Eager to
        contribute my skills and enthusiasm to innovative projects that push the
        boundaries of web development.
      </div>
      <div className="what-i-do-container">
        <div className="heading mb-3">What I DO!</div>
        <div className="my-working-skils row">
          <div className="col-6 skills-divide-row">
            <div className="ui-ux-design-container row">
              <div className="col-2 skill-icons-highlight">
                <i class="bi bi-brush-fill"></i>
              </div>
              <div className="col-10 d-flex flex-column justify-content-start align-items-start">
                <p className="skill-heading">UI/UX Design</p>
                <p className="skill-description">
                  Expert UI/UX designer adept at creating intuitive and visually
                  appealing digital experiences. Proficient in user research,
                  wireframing, prototyping, and interaction design to deliver
                  seamless interfaces. Passionate about crafting designs that
                  enhance user satisfaction and engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 skills-divide-row">
            <div className="webdevelopment-container row">
              <div className="col-2 skill-icons-highlight">
                <i class="bi bi-laptop"></i>
              </div>
              <div className="col-10 d-flex flex-column justify-content-start align-items-start">
                <p className="skill-heading">Web Development</p>
                <p className="skill-description">
                  Expert web developer proficient in HTML, CSS, JavaScript, and
                  frameworks like React. Skilled in crafting responsive and
                  dynamic websites with clean code and intuitive user
                  interfaces. Passionate about leveraging technology to create
                  seamless digital experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 skills-divide-row">
            <div className="digital-marketing-container row">
              <div className="col-2 skill-icons-highlight">
              <i class="bi bi-briefcase"></i>
              </div>
              <div className="col-10 d-flex flex-column justify-content-start align-items-start">
                <p className="skill-heading">Digital Marketing</p>
                <p className="skill-description">
                  Experienced digital marketer proficient in SEO, SEM, and
                  social media advertising. Strategic thinker with a proven
                  track record of driving traffic, engagement, and conversions.
                  Skilled in analyzing data to optimize campaigns and deliver
                  measurable results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 skills-divide-row">
            <div className="seo-optimization-container row">
              <div className="col-2 skill-icons-highlight">
                <i class="bi bi-search"></i>
              </div>
              <div className="col-10 d-flex flex-column justify-content-start align-items-start">
                <p className="skill-heading">SEO Optimisation</p>
                <p className="skill-description">
                  Proficient in SEO optimization techniques to enhance website
                  visibility and organic traffic. Skilled in keyword research,
                  on-page optimization, and link building strategies. Proven
                  ability to analyze data and implement effective SEO strategies
                  for improved search engine rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
