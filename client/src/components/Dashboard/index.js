import React, { Component, useState, useEffect } from "react";
// import Login from "../Login";
import Search from "../Search";
import TableHeader from "../TableHeader";
import API from '../../utils/API';


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

    const handleDeleteButton = id => {
        API.deleteSong(id)
            .then(res => getSongs)
            .catch(err => console.log(err));
    };

    return (
        <>
            <Search />
            <h1>Hello </h1>
            <table className="results-container">
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    {playlist.map((song, index) => (
                        <tr key={index}>
                            <td>
                                <img src={song.albumArt} alt="No Album Cover Avaliable" />
                            </td>
                            <td>
                                {song.artist}
                            </td>
                            <td>
                                {song.song}
                            </td>
                            <td>
                                <button className="btn btn-danger" type="button" id={song._id} onClick={() => handleDeleteButton(song._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Dashboard;