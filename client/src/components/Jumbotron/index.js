import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import BackgroundVideo from '../video/background.mp4';
import "./style.css";


function JumboScreen() {
  return (
    <>
      <Jumbotron className="jumbotron">







        <div className="overlay">
          <h2>WELCOME TO THE WORLD OF MUSIC</h2>
        </div>
        <video className="video-background" autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>

      </Jumbotron>
    </>
  );
}

export default JumboScreen;
