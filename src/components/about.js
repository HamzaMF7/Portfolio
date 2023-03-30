import React from "react";

export default function About() {
  return (
    <div class="section-content about">
      <div class="title">
        <h2>About me</h2>
        <div class="rule"></div>
      </div>
      <p>
        As a full stack developer, I am a versatile and skilled professional
        with a broad range of technical expertise. I possess a deep
        understanding of the entire software development process, from ideation
        to deployment, and am able to work across all layers of a technology
        stack
      </p>
      <h3>what i do!</h3>
      <div class="services">
        <div class="box">
          <i class="fa-solid fa-camera-retro"></i>
          <div class="box-c">
            <h4>Photography</h4>
            <p>
              I offer professional photography services for events, and
              portraits. I specialize in capturing authentic moments and
              emotions through my lens.
            </p>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-gears"></i>
          <div class="box-c">
            <h4>Managment</h4>
            <p>
              I offer website management services that encompass a range of
              tasks required to keep a website running smoothly and effectively.
            </p>
          </div>
        </div>
        <div class="box">
          <i class="fa-solid fa-code"></i>
          <div class="box-c">
            <h4>Web Development</h4>
            <p>
              I offer web development services that involve the creation of
              custom websites and web applications tailored to meet the unique
              needs of each client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
