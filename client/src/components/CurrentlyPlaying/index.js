import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ColdPlay from "../CurrentlyPlaying/ColdPlay.png";
import Muse from "../CurrentlyPlaying/Muse.jpg";
import RockWithYou from "../CurrentlyPlaying/RockWithYou.jpg";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import IconButton from '@material-ui/core/IconButton';
import "./style.css";

function NowPlaying() {
  return (
    <CardDeck>

      <Card bg="dark" text="light">
        <Card.Img variant="top" src={Muse} />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}} className="playheader"><b>Previous</b></Card.Title>
          <Card.Text style={{textAlign: "center"}}>
            Muse - Uprising
          </Card.Text>
        </Card.Body> 
      </Card>

      <Card bg="dark" text="light">
        <Card.Img variant="top" src={ColdPlay} />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}} className="playheader"><b>Now Playing</b></Card.Title>
          <Card.Text style={{textAlign: "center"}}>
            Coldplay - Sky Full Of Stars 
          </Card.Text>
          <div style={{textAlign: "center"}}>
          <IconButton aria-label="previous">
            <SkipPreviousIcon style={{color: "white"}}/>
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon style={{color: "white"}}/>
          </IconButton>
          <IconButton aria-label="next">
           <SkipNextIcon style={{color: "white"}}/>
          </IconButton>
          </div>
        </Card.Body>
      </Card>

      <Card bg="dark" text="light">
        <Card.Img variant="top" src={RockWithYou} />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}} className="playheader"><b>Up Next</b></Card.Title>
          <Card.Text style={{textAlign: "center"}}>
            Michael Jackson - Rock With You
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  )
}

export default NowPlaying;
