import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const worklabel = {
  color: "white",
  padding: 0,
  margin: 0
};

class Landing extends Component {
  render() {
    return (
      <div>
        <Parallax
          blur={{ min: -15, max: 5 }}
          bgImage={require("../assets/screen1.png")}
          bgImageAlt="aeon inovation"
          strength={200}
        >
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "30px"
              //marginTop: "70%"
            }}
          >
            Giving life to your imagination
          </p>
          <div style={{ height: "500px" }} />
        </Parallax>
        <Parallax
          blur={{ min: -15, max: 5 }}
          bgImage={require("../assets/Graphic_Design.png")}
          bgImageAlt="aeon inovation"
          strength={200}
        >
          <div style={{ height: "500px" }} />
        </Parallax>
        <Parallax
          blur={{ min: -15, max: 5 }}
          bgImage={require("../assets/One_Pager_Website.png")}
          bgImageAlt="aeon inovation"
          strength={200}
        >
          <div style={{ height: "500px" }} />
        </Parallax>
        <Parallax
          blur={{ min: -15, max: 5 }}
          bgImage={require("../assets/Video_Editing.png")}
          bgImageAlt="aeon inovation"
          strength={200}
        >
          <div style={{ height: "500px" }} />
        </Parallax>
      </div>
    );
  }
}

export default Landing;
