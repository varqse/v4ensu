import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => (
  <div className="home-container">
    <div className="middlecontent">
      <div>
        <div className="myname">Ishvara Pranidhana Lakshmana</div>
        <div className="social-icons">
        <a href="https://github.com/varqse" target="_blank" rel="noopener noreferrer" className="icon">
          <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com/var11able/" target="_blank" rel="noopener noreferrer" className="icon">
          <FaInstagram size={30} />
        </a>
      </div>
      </div>
      <p className="aboutme">
        Undergraduate Computer Science student with a strong interest in Web Development, actively seeking for any opportunities to contribute meaningfully while expanding and honing my expertise in the field.
      </p>
    </div>

    <div className="footer">
      <div className="experience">
        <span className="year">'25 - Now</span>
        <span className="company">
          <a href="https://bakorwilmalang.jatimprov.go.id/" target="_blank" rel="noopener noreferrer">
            BAKORWIL Malang
          </a>
        </span>
        <span className="position">Web Developer</span>
      </div>
      {/* <div className="experience">
        <span className="year">'26 - '27</span>
        <span className="company">
          <a href="https://bakorwilmalang.jatimprov.go.id/" target="_blank" rel="noopener noreferrer">
            Google
          </a>
        </span>
        <span className="position">Web Developer</span>
      </div> */}
      <div className="skills">
        <p className="label">Skills</p>
        <p className="list">HTML5, CSS3, JavaScript, C, PHP, SQL, Laravel, Python, React.</p>
      </div>
    </div>
  </div>
);

export default Home;

