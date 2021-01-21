import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import EarthWindFire from "../RecentlyPlayed/EarthWindFire.jpg";
import TakeOnMe from "../RecentlyPlayed/TakeOnMe.jpg";
import Journey from "../RecentlyPlayed/Journey.jpg";
import BeeGee from "../RecentlyPlayed/BeeGees.jpg";
import MichaelJackson from "../RecentlyPlayed/MichaelJackson.png";

function RecentSongs() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={EarthWindFire} />
                <Card.Body>
                    <Card.Title>Earth Wind &amp; Fire</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={TakeOnMe} />
                <Card.Body>
                    <Card.Title>A-Ha</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 10 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Journey} />
                <Card.Body>
                    <Card.Title>Journey</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 25 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={BeeGee} />
                <Card.Body>
                    <Card.Title>Bee Gees</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 42 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={MichaelJackson} />
                <Card.Body>
                    <Card.Title>Michael Jackson</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 55 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default RecentSongs;