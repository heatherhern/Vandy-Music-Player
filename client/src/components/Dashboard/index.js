import React, { Component, useState, useEffect } from "react";
import Search from "../Search";
import CardSet from "../Cards";
import JumboScreen from "../Jumbotron";
import Footer from "../Footer";
import API from '../../utils/API';
import CustomizedTables from "../Table";
import RecentSongs from "../RecentlyPlayed";


function Dashboard() {
    const [playlist, setPlaylist] = useState([]);

    const getSongs = () => {
        API.getUserSongs()
            .then(function (data) {
                setPlaylist(data.data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    useEffect(getSongs, []);

    return (
        <>
            <JumboScreen />
            <RecentSongs /><br/>
            <Search />
            <CustomizedTables/><br/><br/>
            <table className="results-container">
                <tbody>
                    {playlist.map((song, index) => (
                        <tr key={index}>
                            <td>
                                {song.songName}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <CardSet />
            <Footer />
        </>
    );
}

export default Dashboard;