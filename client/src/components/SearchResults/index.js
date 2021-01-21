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
                                {song.songName}
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

