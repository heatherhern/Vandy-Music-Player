import React from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { FaSpotify } from "react-icons/fa";
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
                {/* Card #1 The Weeknd */}
                <div className="container">
                    <Card className="cardcolumn">
                        <a href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=tpTBijMgTjuCyTOmxrJtyA">
                            <Card.Img variant="top" src={TheWeeknd} className="image" />
                        </a>
                        <div className="middle">
                            <div className="spotifybutton"><Button variant="success" size="lg" block>Spotify <FaSpotify/></Button></div>
                        </div>
                    </Card>
                </div>

                {/* Card #2 Ariana Grande */}
                <div className="container">
                    <Card className="cardcolumn">
                        <a href="https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR?si=by1WwntdSNaRqjdJbpvA2g">
                            <Card.Img variant="top" src={ArianaGrande} className="image" />
                        </a>
                        <div className="middle">
                            <div className="spotifybutton"><Button variant="success" size="lg" block>Spotify <FaSpotify/></Button></div>
                        </div>
                    </Card>
                </div>

                {/* Card #3 Billie Eilish */}
                <div className="container">
                    <Card className="cardcolumn">
                        <a href="https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH?si=oQmF-qAiQiOlW4ZKkrYSCA">
                            <Card.Img variant="top" src={Billie} className="image" />
                        </a>
                        <div className="middle">
                            <div className="spotifybutton"><Button variant="success" size="lg" block>Spotify <FaSpotify/></Button></div>
                        </div>
                    </Card>
                </div>

                {/* Card #4 Justin Bieber */}
                <div className="container">
                    <Card className="cardcolumn">
                        <a href="https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s?si=N2QCiMckR-qmrFzed_eJtw">
                            <Card.Img variant="top" src={Justin} className="image" />
                        </a>
                        <div className="middle">
                            <div className="spotifybutton"><Button variant="success" size="lg" block>Spotify <FaSpotify/></Button></div>
                        </div>
                    </Card>
                </div>

                {/* Card #5 Dua Lipa */}
                <div className="container">
                    <Card className="cardcolumn">
                        <a href="https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we?si=JlTkos92R7-mMGEtXlhCIQ">
                            <Card.Img variant="top" src={DuaLipa} className="image" />
                        </a>
                        <div className="middle">
                            <div className="spotifybutton"><Button variant="success" size="lg" block>Spotify <FaSpotify/></Button></div>
                        </div>
                    </Card>
                </div>

                {/* Card #6 Post Malone */}
                <div className="container">
                    <Card className="cardcolumn">
                        <a href="https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60?si=0aMK7ba9SzikOYKkk6bevg">
                            <Card.Img variant="top" src={PostMalone} className="image" />
                        </a>
                        <div className="middle">
                            <div className="spotifybutton"><Button variant="success" size="lg" block>Spotify <FaSpotify/></Button></div>
                        </div>
                    </Card>
                </div>

            </CardColumns>
        </>
    )
}

export default CardSet;


