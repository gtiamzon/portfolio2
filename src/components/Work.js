import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
            <h1>Projects</h1>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  stack={project.stack}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  githubLink={project.github}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
