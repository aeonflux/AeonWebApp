import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    animation: "zoom-in-right",
    image: "https://image.ibb.co/nn3BXp/graphic_art.png",
    backgroundColor: "#ffffff"
  },
  {
    animation: "zoom-in-left",
    image: "https://image.ibb.co/m2bLQ9/app_development.png",
    backgroundColor: "#ffffff"
  },
  {
    animation: "zoom-in-right",
    image: "https://image.ibb.co/guVQsp/video_editing.png",
    backgroundColor: "#ffffff"
  }
];

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  // createSection({ features }) {
  //   return features.map(feature => {
  //     <div style={{ padding: "10%", backgroundColor: "#fffff" }}>
  //       <div className="center" data-aos={feature.animation}>
  //         <img src={feature.image} />
  //       </div>
  //     </div>;
  //   });
  // }

  render() {
    return (
      // Aeon Concept
      <div>
        <div style={{ padding: "10%", backgroundColor: "#C0C2DC" }}>
          <div className="center" data-aos="zoom-out-down">
            <img src="https://image.ibb.co/g76v8U/aeon_concept.png" />
          </div>
          <div className="center" data-aos="fade-down">
            <h2 style={{ color: "#ffffff" }}> Your Mind. Your Reality. </h2>
          </div>
        </div>
        <div style={{ padding: "20%", backgroundColor: "#ffffff" }}>
          <div className="right" data-aos="zoom-in-right">
            <img src="https://image.ibb.co/nn3BXp/graphic_art.png" />
          </div>
          <div className="left" data-aos="fade-down">
            <h4 style={{ color: "#4C3DA6" }}>Graphic Design</h4>
            <p>Custom icon sets, mockups, posters and resumes</p>
          </div>
        </div>
        <div style={{ padding: "20%", backgroundColor: "#ffffff" }}>
          <div className="left" data-aos="zoom-in-left">
            <img src="https://image.ibb.co/m2bLQ9/app_development.png" />
          </div>
          <div className="right" data-aos="fade-down">
            <h4 style={{ color: "#4C3DA6" }}>One Pager Website </h4>
            <p>
              Responsive design, multi-section, customizable contents and
              animations
            </p>
          </div>
        </div>
        <div style={{ padding: "20%", backgroundColor: "#ffffff" }}>
          <div className="right" data-aos="zoom-in-right">
            <img src="https://image.ibb.co/guVQsp/video_editing.png" />
          </div>
          <div className="left" data-aos="fade-down">
            <h4 style={{ color: "#4C3DA6" }}> Video Editing / Animations </h4>
            <p>Graphical presentations and animations</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
