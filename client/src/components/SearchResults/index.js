import React from "react";
import "./style.css";
import TableHeader from "../TableHeader"

function SearchResults(props) {
    return (
        <>
            <table className="results-container">
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    {props.results.map((song, index) => (
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
                                <button className="btn btn-primary" type="button" id={song.id} onClick={() => props.handleSavedButton(song)}>
                                    Save
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}


export default SearchResults;

