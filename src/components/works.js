import React from "react";
import works from "./works.json";
export default function Works(props) {
  const projects = works.projects;

  return (
    <div className="section-content works">
      <article class="portfolio" data-page="portfolio">
        <div class="title">
          <h2>Works</h2>
          <div class="rule"></div>
        </div>

        <div class="projects">
          {projects.map((e) => (
            <div className="card" key={e.id}>
              <div className="box-image">
                <a href={e.lien} target="_blank" ><i class="fa-solid fa-eye view"></i></a>
                <img src={require(`../${e.image}`)} alt="card" />
              </div>
              <div className="box-info">
                <h3 className="title">&lt; {e.name} /&gt;</h3>
                <div className="info">
                  <div className="disc">
                    <i class="fa-solid fa-circle"></i>
                    <span>{e.language}</span>
                  </div>
                  <a className="mobile-view" href={e.lien} target="_blank" ><i class="fa-solid fa-eye"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
