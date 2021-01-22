import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import EarthWindFire from "../RecentlyPlayed/EarthWindFire.jpg";
import TakeOnMe from "../RecentlyPlayed/TakeOnMe.jpg";
import Journey from "../RecentlyPlayed/Journey.jpg";
import BeeGee from "../RecentlyPlayed/BeeGees.jpg";
import MichaelJackson from "../RecentlyPlayed/MichaelJackson.png";
import "./style.css";

function RecentSongs() {
    return (
        <div className="recentSongsCards">
            <CardGroup>
                {/* Card #1 Earth Wind & Fire */}
                <Card>
                    <Card.Img variant="top" src={EarthWindFire} />
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                {/* Card #2 A-Ha */}
                <Card>
                    <Card.Img variant="top" src={TakeOnMe} />
                    <Card.Footer>
                        <small className="text-muted">Last updated 10 mins ago</small>
                    </Card.Footer>
                </Card>

                {/* Card #3 Journey */}
                <Card>
                    <Card.Img variant="top" src={Journey} />
                    <Card.Footer>
                        <small className="text-muted">Last updated 25 mins ago</small>
                    </Card.Footer>
                </Card>

                {/* Card #4 Bee Gees */}
                <Card>
                    <Card.Img variant="top" src={BeeGee} />
                    <Card.Footer>
                        <small className="text-muted">Last updated 42 mins ago</small>
                    </Card.Footer>
                </Card>

                {/* Card #5 Michael Jackson */}
                <Card>
                    <Card.Img variant="top" src={MichaelJackson} />
                    <Card.Footer>
                        <small className="text-muted">Last updated 55 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default RecentSongs;