import React from "react";
import "./style.css";

function SearchResults(props) {
    return (
        <>
            <table className="results-container">
                <tbody>
                    {props.results.map((song, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={song.albumArt} alt="No Album Cover Avaliable" />
                                </td>
                                <td>
                                    {song.song} 
                                </td>
                                <td>
                                    {song.artist} 
                                </td>
                                <td>
                                <button className="btn btn-primary" type="button" id={song.id} onSubmit={() => props.handleSubmit(song)}>
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

