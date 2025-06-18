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
            <h5>Hello, I'm</h5>
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
              A dedicated MERN stack developer fresher with a strong foundation
              in MongoDB, Express.js, React, and Node.js. Equipped with web
              development skills, problem-solving abilities, and a passion for
              creating dynamic and user-friendly applications.
            </p>
            <div className="social">
              <i className="ri-facebook-line"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-twitter-x-line"></i>
              <i className="ri-github-line"></i>
            </div>
            {/* <button>
              CV <i className="ri-file-list-3-line"></i>
            </button> */}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "Bleson Philip.pdf"; // Path to your CV file
                link.download = "Bleson Philip Cv.pdf"; // Suggested download filename
                link.click();
              }}
            >
              CV <i className="ri-file-list-3-line"></i>
            </button>
          </div>
          <div className="headerImage">
            <img src="c.jpg" alt="hero-img" />
          </div>
        </div>
      </div>
      <section id="about" className="about_wrapper">
        <h2 className="SectionTitle">About Me</h2>
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
                  Skilled in developing responsive, interactive web applications
                  using React.js, HTML5, CSS3, and modern JavaScript (ES6+).
                  Experienced in crafting seamless user experiences with clean,
                  maintainable code and following best practices in UI/UX
                  design. Passionate about building visually appealing,
                  high-performance web interfaces.
                </p>
              </div>
            </div>
            <div className="aboutCard">
              <img src="Backend.png" alt="backend" />
              <div className="aboutCardContent">
                <h3>Backend Developer</h3>
                <p>
                  Proficient in building scalable and high-performance
                  server-side applications using Node.js and Express.js.
                  Experienced in designing and implementing RESTful APIs for
                  efficient data handling and seamless client-server
                  communication. Skilled in working with databases like MongoDB,
                  with a strong focus on data modeling, security, and
                  performance optimization.
                </p>
              </div>
            </div>
            <div className="aboutCard">
              <img src="UiUx.png" alt="" />
              <div className="aboutCardContent">
                <h3>Ui / Ux Designer</h3>
                <p>
                  Focused on creating intuitive and user-friendly interfaces
                  with a strong understanding of design principles. Skilled in
                  translating ideas into engaging visual designs that enhance
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Experience" className="Experience_container">
        <h2 className="SectionTitle"></h2>
        <div className="Experience">
          <div className="skills_wrapper">
            <h3>My skills</h3>
            <p>
              Proficient in MERN stack development with expertise in MongoDB,
              Express.js, React, and Node.js. Skilled in creating responsive web
              designs using HTML, CSS, and JavaScript. Experienced in software
              testing concepts, SDLC models, and database management with SQL
              and MongoDB. Dedicated to writing clean, efficient, and
              maintainable code.
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
            {/* <div className="Experience_Card">
              <h3>Software Developer</h3>
              <p>Dec 2024 - Jan 2025</p>
              <ul>
                <li>Developed Portfolio App</li>
                <li>Developed Weather App</li>
                <li>Developed Todo App</li>
                <li>Developed Calculator App</li>
              </ul>
            </div> */}
            {/* <div className="Experience_Card">
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
            </div> */}
          </div>
        </div>
      </section>

      <section id="Projects" className="project_container">
        <h2 className="SectionTitle">My Projects</h2>
        <div className="projects">
          <div className="project">
            <img src="portfolio-image-01.png" alt="1" />
            <div className="project_content">
              <h3>Real-time Chat App</h3>
              <p>
                A responsive real-time chat application built using the MERN
                stack (MongoDB, Express.js, React.js, Node.js) with Socket.IO
                for live communication. Features include user authentication,
                live messaging, typing indicators, online status, and a clean,
                responsive UI optimized for both desktop and mobile devices.
              </p>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <div className="project">
            <img src="portfolio-image-02.png" alt="1" />
            <div className="project_content">
              <h3>Weather App</h3>
              <p>
                A dynamic weather application built using HTML, CSS, and
                JavaScript that provides real-time weather updates. Features
                include temperature details, weather conditions, and
                location-based forecasts for an enhanced user experience.
              </p>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <div className="project">
            <img src="portfolio-image-03.png" alt="1" />
            <div className="project_content">
              <h3>Bazario - E-commerce Web Application</h3>
              <p>
                A dynamic full-stack e-commerce application built using the MERN
                stack (MongoDB, Express.js, React.js, Node.js). Features secure
                JWT authentication, role-based access control, product
                management with image uploads (Multer & Cloudinary), and a
                shopping cart system using React Context and localStorage.
                Includes a fully responsive UI/UX, delivering a seamless
                shopping experience across devices. This project showcases my
                ability to develop secure, scalable, and user-friendly web
                applications from scratch.
              </p>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
          <div className="project">
            <img src="portfolio-image-04.png" alt="1" />
            <div className="project_content">
              <h3>Portfolio</h3>
              <p>
                A personal portfolio website built using React to showcase
                skills, projects, and achievements. Designed with a modern UI,
                responsive layout, and interactive elements to provide a
                seamless browsing experience for visitors.
              </p>
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
        </div>
      </section>

      <section id="Contact" className="contact_wrapper">
        <h3 className="SectionTitle"> Get In Touch</h3>
        <div className="contact">
          <div className="contact_form">
            <h4>Send a Message</h4>
            <div className="input_wrapper">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input_wrapper">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Enter phone" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button className="s">Submit</button>
          </div>
          <div className="contact_details">
            <h4>Contact Info</h4>
            <div className="info_wrapper">
              <i className="ri-phone-line"></i>
              <span>+91 8606092692</span>
            </div>
            <div className="info_wrapper">
              <i className="ri-mail-line"></i>
              <span>blesonphilipmca2024@gmail.com</span>
            </div>
            <div className="social">
              <i className="ri-instagram-line"></i>
              <i className="ri-facebook-line"></i>
              <i className="ri-twitter-x-line"></i>
              <i className="ri-youtube-line"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="footerLinks">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#Experience">Experience</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
        <p>@copyright 2025 all rights reserved</p>
      </section>
    </div>
  );
};

export default Index;
