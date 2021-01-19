import React from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { FaRegThumbsUp, FaSpotify } from "react-icons/fa";
import "./style.css";
import TheWeeknd from "../Cards/TheWeeknd.jpg";
import ArianaGrande from "../Cards/ArianaGrande.jpg";
import Billie from "../Cards/Billie.jpg";
import Justin from "../Cards/Justin.jpg";
import DuaLipa from "../Cards/DuaLipa.jpg";
import PostMalone from "../Cards/PostMalone.jpg";



function CardSet() {
    return (
        <>
            <CardColumns>
                {/* Card #1 */}
                <Card className="cardcolumn">
                    <Card.Img variant="top" src={TheWeeknd} />
                    <Card.Body>
                        <Card.Title>The Weeknd</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="info">Learn More <FaRegThumbsUp /></Button>{' '}
                        <Button variant="success">Spotify <FaSpotify /></Button>
                    </Card.Body>
                </Card>

                {/* Card #2 */}
                <Card className="cardcolumn" >
                    <Card.Img variant="top" src={ArianaGrande} />
                    <Card.Body>
                        <Card.Title>Ariana Grande</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="info">Learn More <FaRegThumbsUp /></Button>{' '}
                        <Button variant="success">Spotify <FaSpotify /></Button>
                    </Card.Body>
                </Card>

                {/* Card #3 */}
                <Card className="cardcolumn" size="small">
                    <Card.Img variant="top" src={Billie} />
                    <Card.Body>
                        <Card.Title>Billie Eillish</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="info">Learn More <FaRegThumbsUp /></Button>{' '}
                        <Button variant="success">Spotify <FaSpotify /></Button>
                    </Card.Body>
                </Card>

                {/* Card #4 */}
                <Card className="cardcolumn">
                    <Card.Img variant="top" src={Justin} />
                    <Card.Body>
                        <Card.Title>Justin Bieber</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="info">Learn More <FaRegThumbsUp /></Button>{' '}
                        <Button variant="success">Spotify <FaSpotify /></Button>
                    </Card.Body>
                </Card>

                {/* Card #5 */}
                <Card className="cardcolumn">
                    <Card.Img variant="top" src={DuaLipa} />
                    <Card.Body>
                        <Card.Title>Dua Lipa</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="info">Learn More <FaRegThumbsUp /></Button>{' '}
                        <Button variant="success">Spotify <FaSpotify /></Button>
                    </Card.Body>
                </Card>

                {/* Card #6 */}
                <Card className="cardcolumn">
                    <Card.Img variant="top" src={PostMalone} />
                    <Card.Body>
                        <Card.Title>Post Malone</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="info">Learn More <FaRegThumbsUp /></Button>{' '}
                        <Button variant="success">Spotify <FaSpotify /></Button>
                    </Card.Body>
                </Card>

            </CardColumns>
        </>
    )
}

export default CardSet;


