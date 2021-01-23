import React from "react";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card';
import "./style.css";
import EarthWindFire from "../RecentlyPlayed/EarthWindFire.jpg";
import TakeOnMe from "../RecentlyPlayed/TakeOnMe.jpg";
import Journey from "../RecentlyPlayed/Journey.jpg";
import BeeGee from "../RecentlyPlayed/BeeGees.jpg";
import MichaelJackson from "../RecentlyPlayed/MichaelJackson.png";

function RecentSongs() {
    return (
        <CardDeck>
            {/* Card #1 Earth Wind & Fire */}
            <Card bg="dark" text="light" className="animation">
                <Card.Img variant="top" src={EarthWindFire} />
                <Card.Body>
                    <Card.Title style={{textDecorationLine: 'underline'}}>Earth Wind &amp; Fire</Card.Title>
                    <Card.Text>
                        Greatest Hits
                    </Card.Text>
                </Card.Body>
            </Card>
            
            {/* Card #2 A-Ha */}
            <Card bg="dark" text="light" className="animation">
                <Card.Img variant="top" src={TakeOnMe} />
                <Card.Body>
                    <Card.Title style={{textDecorationLine: 'underline'}}>A-Ha</Card.Title>
                    <Card.Text>
                        Take On Me
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Card #3 Michael Jackson */}
            <Card bg="dark" text="light" className="animation">
                <Card.Img variant="top" src={MichaelJackson} />
                <Card.Body>
                    <Card.Title style={{textDecorationLine: 'underline'}}>Michael Jackson</Card.Title>
                    <Card.Text>
                        Thriller
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Card #4 Journey */}
            <Card bg="dark" text="light" className="animation">
                <Card.Img variant="top" src={Journey} />
                <Card.Body>
                    <Card.Title style={{textDecorationLine: 'underline'}}>Journey</Card.Title>
                    <Card.Text>
                        Greatest Hits
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Card #5 Bee Gees */}
            <Card bg="dark" text="light" className="animation">
                <Card.Img variant="top" src={BeeGee} />
                <Card.Body>
                    <Card.Title style={{textDecorationLine: 'underline'}}>Bee Gees</Card.Title>
                    <Card.Text>
                        Stayin' Alive
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    );
}

export default RecentSongs;