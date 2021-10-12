import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, githubLink, stack }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div id="cardback">
        <div className="content">
          <h1 className="header">{heading}</h1>
          <h4 className="stack">{stack}</h4>
          <p className="text">{paragraph}</p>
          <div id="card-button" >
            <a
              href={projectLink ? projectLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live Site
            </a>

            <a
              href={githubLink ? githubLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
