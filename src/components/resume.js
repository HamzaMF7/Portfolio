import React, { useEffect, useRef } from "react";

export default function Resume(e) {
  const elementsRef = useRef(null);

  useEffect(() => {
    var data = document.getElementsByTagName("data");
    var skill = document.getElementsByClassName("skill");
    let progressFill = document.querySelectorAll(".skill-progress-fill");
    var useData = Array.from(data);
    var useSkill = skill[0];
    var useProgressFill = Array.from(progressFill);
    var started = false;

    var top = document.getElementsByClassName("title-wrapper")
    console.log(top[1]);

    window.onscroll = () => {
      if (window.scrollY >= useSkill.offsetTop -490) {
        console.log("reached");
        for (var i = 0; i < useData.length; i++) {
          useProgressFill[i].style.width = `${useData[i].getAttribute(
            "value"
          )}%`;
        }
        if (!started) {
          useData.forEach((e) => startCount(e));
        }
        started = true;
      }
    };
  }, []);

  function startCount(el) {
    let goal = el.getAttribute("value");
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent === goal) {
        clearInterval(count);
      }
    }, 1300 / goal);
  }

  return (
    <div className="section-content resume">
      <article className="resume" data-page="resume">
        <div className="title">
          <h2>Resume</h2>
          <div className="rule"></div>
        </div>

        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ul className="timeline-list">
            <li className="timeline-item ">
              <h4 className="h4 timeline-item-title animate__animated animate__backInUp">
                University of Science and Technology
              </h4>

              <span>Licence gi</span>

              <p className="timeline-text">
                Bachelor of Science and Technology, Computer Engineering
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                University of Science and Technology
              </h4>

              <span>Deust</span>

              <p className="timeline-text">
                University degree in science and technology, MIP option
                "Mathematics, Computer Science, Physics".
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">High school </h4>

              <span>Baccalaureat</span>

              <p className="timeline-text">
                High school degree in science, physics and chemistry
              </p>
            </li>
          </ul>
        </div>

        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <i className="fa-solid fa-atom"></i>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ul className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Geniway Agency</h4>

              <span>2015 — Present</span>

              <p className="timeline-text">
                Creation of a lading page with HTML/CSS, JS, PHP, MySQL
                technologies.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Design and development of an e-commerce site
              </h4>

              <span>2013 — 2015</span>

              <p className="timeline-text">HTML/CSS, ReactJS, Laravel, MySQL</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Management of a distributed Database on Oracle servers
              </h4>

              <span>2010 — 2013</span>

              <p className="timeline-text">
                Tools: OracleDB , SQLDeveloper
                <br />
                - Creation of a virtual network <br />
                - Creation of database links <br />
                - Creation of a Central DB <br />
                - Creation of fragments of the Central DB
                <br />
                - Synchronization of writes with
                <br />
                the help of Triggers
              </p>
            </li>
          </ul>
        </div>

        <div className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul ref={elementsRef} className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">HTML/CSS</h5>
                <div className="percentage">
                  <data value="90">0</data><span>%</span>
                </div>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "0%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">JAVASCRIPT</h5>
                <div className="percentage">
                  <data value="80">0</data><span>%</span>
                </div>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "0" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">REACT.JS</h5>
                <div className="percentage">
                  <data value="80">0</data><span>%</span>
                </div>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "0%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">PHP</h5>
                <div className="percentage">
                  <data value="70">0</data><span>%</span>
                </div>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "0%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">LARAVEL</h5>
                <div className="percentage">
                  <data value="80">0</data><span>%</span>
                </div>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "0%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">MYSQL</h5>
                <div className="percentage">
                  <data value="90">0</data><span>%</span>
                </div>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "0%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
