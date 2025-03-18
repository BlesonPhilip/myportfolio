import React from "react";
import Nav from "../../components/Navbar/nav";
import "./index.css";

const Index = () => {
  return (
    <div>
      <div className="headerWrapper">
        <Nav />

        <div className="headerContainer">
          <div className="headerContent">
            <h5>Hello I m</h5>
            <h1>Bleson</h1>
            <p>
              A Passionate <span></span>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              voluptate aliquam natus obcaecati officia quas soluta fuga enim
              quae nulla voluptatem sequi quam veritatis tempore doloribus,
              alias ex esse eos.
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
            <img src="hero-image.jpg" alt="hero-img" />
            <div className="borderAnimation"></div>
          </div>
        </div>
      </div>

      {/* ----------------Header-------------- */}
    </div>
  );
};

export default Index;
