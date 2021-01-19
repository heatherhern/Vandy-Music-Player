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
                            Grammmy Award-winning artist The Weeknd is a Canadian singer, songwriter and record producer with more than 75 million records sold worldwide.
                            The Weeknd will headline the Super Bowl LV Halftime Show in February 2021. 
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
                        Ariana Grande's sixth studio album, Positions (2020), debuted at number-one in the UK and US. 
                        Grande became the first artist to have five number-one debuts on the Hot 100 and to have their first five number ones debut at the top.
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
                        Billie Eilish was 13 when she recorded her first viral hit, “Ocean Eyes,” at home with her brother. 
                        At 17 she earmed 1 billion streams on Spotify, making her the youngest artist to top 1 billion streams on a project.
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
                        Justin Drew Bieber was discovered by Record Exec Scooter Braun on YouTube at age 13. Today, 
                        with five hit albums and sales of over 150 million records, Justin Bieber is one of the world's best-selling music artists. 
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
                        Born and raised in London to Kosovar-Albanian parents, Dua Lipa signed to Warner Records in 2015. She released her self-titled debut in 2017 which featured the hit singles, 
                        'IDGAF' and her first UK #1 hit 'New Rules'. 
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
                        Austin Richard Post, known professionally as Post Malone, is an American rapper, 
                        singer, songwriter, and record producer known for his introspective songwriting and unique vocal style in a range of styles.
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


