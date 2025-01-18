import React from "react";
import project1Img from "../assets/images/project1home.png";
import project2Img from "../assets/images/project2home.png";
import project3Img from "../assets/images/project3home.png";
import project4Img from "../assets/images/project4home.png";

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <div className="middlecontent">
        <div className="myname">
          <div className="iname">Ishvara</div>
          <div className="iname">Pranidhana</div>
          <div className="iname">Lakshmana</div>
        </div>
      </div>
    </div>

    <div className="aboutcontainer">
      <h2 className="abouttitle">About</h2>
      <p className="aboutme">
        Undergraduate Computer Science student with a strong interest in Web Development, actively seeking for any opportunities to contribute meaningfully while expanding and honing my expertise in the field. I am a quick learner, a team player, and a problem solver. I am passionate about technology and its potential to make a positive impact on the world. I am always eager to learn new things and take on new challenges.
      </p>
    </div>

    <div className="home-workscontainer">
      <h2 className="home-workstitle">Selected Works</h2>
      <div className="home-workscards">
        <div className="project-card">
          <a href="https://github.com/varqse/laporkan-app" target="_blank" rel="noopener noreferrer">
            <img src={project1Img} alt="Laporkanapp" className="project-image" />
          </a>
          <div className="project-info">
            <p className="project-stacks">CodeIgniter, Bootstrap, SQL</p>
            <h3 className="project-title">Laporkanapp</h3>
          </div>
        </div>
        <div className="project-card">
          <a href="https://harya.id/" target="_blank" rel="noopener noreferrer">
            <img src={project2Img} alt="Harya Pranatreshna" className="project-image" />
          </a>
          <div className="project-info">
            <p className="project-stacks">React JS, Bootstrap</p>
            <h3 className="project-title">Harya Pranatreshna</h3>
          </div>
        </div>
        <div className="project-card">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={project3Img} alt="Vartimes" className="project-image" />
          </a>
          <div className="project-info">
            <p className="project-stacks">React JS, NewsAPI</p>
            <h3 className="project-title">Vartimes</h3>
          </div>
        </div>
        <div className="project-card">
          <a href="https://github.com/varqse/Quiz-App-Using-Java" target="_blank" rel="noopener noreferrer">
            <img src={project4Img} alt="QuizWizz" className="project-image" />
          </a>
          <div className="project-info">
            <p className="project-stacks">Java, SQL</p>
            <h3 className="project-title">QuizWizz</h3>
          </div>
        </div>
      </div>
    </div>

    <div className="footer">
      <p>&copy; 2025 Var11able. All rights reserved.</p>
      <p><a href="https://github.com/varqse" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </div>

  </div>
);

export default Home;

























    {/* <div className="footer">
      <div className="experience">
        <span className="year">'25 - Now</span>
        <span className="company">
          <a href="https://bakorwilmalang.jatimprov.go.id/" target="_blank" rel="noopener noreferrer">
            BAKORWIL Malang
          </a>
        </span>
        <span className="position">Web Developer</span>
      </div>
      <div className="experience">
        <span className="year">'26 - '27</span>
        <span className="company">
          <a href="https://bakorwilmalang.jatimprov.go.id/" target="_blank" rel="noopener noreferrer">
            Google
          </a>
        </span>
        <span className="position">Web Developer</span>
      </div>
      <div className="skills">
        <p className="label">Skills</p>
        <p className="list">HTML5, CSS3, JavaScript, C, PHP, SQL, Laravel, Python, React.</p>
      </div>
    </div> */}