import React from "react";
import Nav from "../../components/Navbar/nav";
import "./index.css";
import { ReactTyped } from "react-typed";

const Index = () => {
  return (
    <div>
      <div className="headerWrapper">
        <Nav />

        <div className="headerContainer">
          <div className="headerContent">
            <h5>Hello I m</h5>
            <h1>Bleson Philip</h1>
            <p>
              A Passionate &nbsp;
              <span>
                <ReactTyped
                  strings={["Web Designer", "App Designer", "Web Developer"]}
                  typeSpeed={40}
                  loop={true}
                  backSpeed={40}
                ></ReactTyped>
              </span>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              voluptate aliquam natus obcaecati officia quas soluta fuga enim .
            </p>
            <div className="social">
              <i className="ri-facebook-line"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-twitter-x-line"></i>
              <i className="ri-github-line"></i>
            </div>
            <button>
              CV <i className="ri-file-list-3-line"></i>
            </button>
          </div>
          <div className="headerImage">
            <img src="f.jpg" alt="hero-img" />
            <div className="borderAnimation"></div>
          </div>
        </div>
      </div>
      <section id="about" className="about_wrapper">
        <h2 className="SectionTitle">About Us</h2>
        <div className="about">
          <div className="aboutImage">
            <img src="a.jpg" alt="" />
          </div>
          <div className="aboutContent">
            <div className="aboutCard">
              <img src="Frontend.png" alt="frotend" />
              <div className="aboutCardContent">
                <h3>Frontend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  incidunt rem inventore consectetur doloremque eius!
                </p>
              </div>
            </div>
            <div className="aboutCard">
              <img src="Backend.png" alt="backend" />
              <div className="aboutCardContent">
                <h3>Backend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  incidunt rem inventore consectetur doloremque eius!
                </p>
              </div>
            </div>
            <div className="aboutCard">
              <img src="UiUx.png" alt="" />
              <div className="aboutCardContent">
                <h3>Ui / Ux Designer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  incidunt rem inventore consectetur doloremque eius!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Experience" className="Experience_container">
        <h2 className="SectionTitle">My Experience</h2>
        <div className="Experience">
          <div className="skills_wrapper">
            <h3>My skills</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              accusantium facilis quia magni sequi quas laudantium mollitia at a
              tenetur debitis quis qui impedit nesciunt repudiandae vitae, iste
              est placeat.
            </p>
            <div className="skills">
              <div className="skill">
                <h4>HTML</h4>
                <div className="skillBar skillHtml" data-value="90%"></div>
              </div>

              <div className="skill">
                <h4>CSS</h4>
                <div className="skillBar skillCss" data-value="80%"></div>
              </div>
              <div className="skill">
                <h4>JavaScript</h4>
                <div className="skillBar skillJs" data-value="75%"></div>
              </div>
              <div className="skill">
                <h4>React JS</h4>
                <div className="skillBar skillReact" data-value="60%"></div>
              </div>
              <div className="skill">
                <h4>Tailwind CSS</h4>
                <div className="skillBar skillTwail" data-value="70%"></div>
              </div>
              <div className="skill">
                <h4>Node JS</h4>
                <div className="skillBar skillNode" data-value="60%"></div>
              </div>
            </div>
          </div>
          <div className="Experience_wrapper">
            <div className="Experience_Card">
              <h3>Software Developer</h3>
              <p>Dec 2024 - Jan 2025</p>
              <ul>
                <li>Developed Portfolio App</li>
                <li>Developed Weather App</li>
                <li>Developed Todo App</li>
                <li>Developed Calculator App</li>
              </ul>
            </div>
            <div className="Experience_Card">
              <h3>Software Developer</h3>
              <p>Dec 2024 - Jan 2025</p>
              <ul>
                <li>Developed Portfolio App</li>
                <li>Developed Weather App</li>
                <li>Developed Todo App</li>
                <li>Developed Calculator App</li>
              </ul>
            </div>
            <div className="Experience_Card">
              <h3>Software Developer</h3>
              <p>Dec 2024 - Jan 2025</p>
              <ul>
                <li>Developed Portfolio App</li>
                <li>Developed Weather App</li>
                <li>Developed Todo App</li>
                <li>Developed Calculator App</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
