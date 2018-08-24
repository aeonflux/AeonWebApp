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

class Dashboard extends Component {
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
      <div>
        <div>
          <div style={{ padding: "11%", backgroundColor: "#C0C2DC" }}>
            <div className="right" data-aos="zoom-out-down">
              <img src="https://image.ibb.co/kfrF8U/aeonify.png" />
            </div>
            <div className="left" data-aos="fade-down">
              <h2 style={{ color: "#ffffff" }}> Welcome to your Dashboard </h2>
              <p style={{ color: "#ffffff" }}>
                View feedback from your clients
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
