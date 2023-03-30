import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Works from "./works";

export default function Section() {
  
  return (
    <section>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />
        </Routes>
    </section>
  );
}
