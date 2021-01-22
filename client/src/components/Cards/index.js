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
                    <a href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=tpTBijMgTjuCyTOmxrJtyA">
                        <Card.Img variant="top" src={TheWeeknd} />
                    </a>
                </Card>

                {/* Card #2 */}
                <Card className="cardcolumn" >
                    <a href="https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR?si=-RGhEldgQD257ok-Boqysw">
                        <Card.Img variant="top" src={ArianaGrande} />
                    </a>
                </Card>

                {/* Card #3 */}
                <Card className="cardcolumn" size="small">
                    <a href="https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH?si=IuyrqMZsQrC_wmt0dHq7Uw">
                        <Card.Img variant="top" src={Billie} />
                    </a>
                </Card>

                {/* Card #4 */}
                <Card className="cardcolumn">
                    <a href="https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s?si=shs-8QhoQ9m1NPL5xd4TUA">
                        <Card.Img variant="top" src={Justin} />
                    </a>
                </Card>

                {/* Card #5 */}
                <Card className="cardcolumn">
                    <a href="https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we?si=GHexncSxSJqtY3gTjxez7w">
                        <Card.Img variant="top" src={DuaLipa} />
                    </a>
                </Card>

                {/* Card #6 */}
                <Card className="cardcolumn">
                    <a href="https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60?si=zEoTFp7yR1uQumd5EJUnig">
                        <Card.Img variant="top" src={PostMalone} />
                    </a>
                </Card>

            </CardColumns>
        </>
    )
}

export default CardSet;


