import React, { Component, useState, useEffect } from "react";
import Search from "../Search";
import CardSet from "../Cards";
import JumboScreen from "../Jumbotron";
import Footer from "../Footer";
import API from '../../utils/API';
import CustomizedTables from "../Table";
import RecentSongs from "../RecentlyPlayed";
import SectionHeader from "../SectionHeader";
import MediaControlCard from "../CurrentlyPlaying";


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
            <RecentSongs /><br/>
            <SectionHeader sectionTitle="SEARCH BY ARTIST" />
            <Search /><br/>
            <SectionHeader sectionTitle="PLAYLISTS" />
            <CustomizedTables/><br/>
            <table className="results-container">
                <tbody>
                    {console.log(playlist)}
                    {playlist.map((song, index) => (
                        <tr key={index}>
                            <td>
                                {song.songName}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <SectionHeader sectionTitle="NOW PLAYING" />
            <MediaControlCard /><br/>
            <SectionHeader sectionTitle="TRENDING ARTISTS" />
            <CardSet />
            <Footer />
        </>
    );
}

export default Dashboard;