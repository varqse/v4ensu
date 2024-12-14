import React from "react";

function Works() {
  return (
    <div className="works-container">
      <div className="work-item">
        <a 
          href="https://harya.id" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          <span className="project-combined">
            <strong className="project-title">Harya.id</strong> 
            <span className="project-meta"> | Portfolio (React.js & Bootstrap)</span>
          </span>
        </a>
      </div>

      <div className="work-item">
        <a 
          href="https://github.com/varqse/laporkan-app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          <span className="project-combined">
            <strong className="project-title">Laporkanapp</strong> 
            <span className="project-meta"> | Report System Website (Codeigniter & SQL)</span>
          </span>
        </a>
      </div>

      <div className="work-item">
        <a 
          href="https://ishvarqse.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          <span className="project-combined">
            <strong className="project-title">Portfolio V1</strong> 
            <span className="project-meta"> | Portfolio (HTML, CSS & JavaScript)</span>
          </span>
        </a>
      </div>

      <div className="work-item">
        <a 
          href="https://www.sciencedirect.com/science/article/pii/S1877050924030904" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          <span className="project-combined">
            <strong className="project-title">
              Comparison of Object Detection Models For Autonomous Vehicle Based
              on Accuracies
            </strong> 
            <span className="project-meta"> | Research </span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Works;

