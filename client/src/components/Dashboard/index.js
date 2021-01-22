import React, { Component, useState, useEffect } from "react";
import Search from "../Search";
import CardSet from "../Cards";
import JumboScreen from "../Jumbotron";
import Footer from "../Footer";
import API from '../../utils/API';
import CustomizedTables from "../Table";
import RecentSongs from "../RecentlyPlayed";
import SectionHeader from "../SectionHeader";


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
            <SectionHeader sectionTitle="RECENTLY PLAYED" />
            <RecentSongs />
            <SectionHeader sectionTitle="SEARCH BY ARTIST" />
            <Search />
            <SectionHeader sectionTitle="PLAYLISTS" />
            <CustomizedTables/>
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
            <SectionHeader sectionTitle="TRENDING ARTISTS" />
            <CardSet />
            <Footer />
        </>
    );
}

export default Dashboard;