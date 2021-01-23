import { React, useState } from "react";
import SearchResults from "../SearchResults";
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';
import "./style.css";

function Search() {
    const [results, setResultsState] = useState([]);
    const [ songs, setSongs ] = useState({
        songName: "",
    });

    const onSubmit = (data) => {
        console.log(data)
        let searchQuery = songs.songName;
        console.log(searchQuery)
        API.getArtist(searchQuery).then(function (data) {
            let res = [];
            console.log(data)
            res = data.data.toptracks.track.map(result => {
            const song = {
                    songName: result.name,
                    artist: result.artist.name,
                    listeners: result.listeners,
                    playcount: result.playcount,
                }
                return song;
            });
            console.log(res);
            console.log(data);
            setResultsState(res);
        });  
    };

    function handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setSongs({...songs, [name]: value});
    };

    const handleSavedButton = song => {
        API.saveSong(song)
            .then(function(data) {
                console.log(data)
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <>
        <form>
            <input type="text" name="songName" className="searchQuery" value={songs.songName} placeholder="Search by Artist" onChange={handleInputChange}/>
            <Button variant="primary" className="submit-btn" onClick={onSubmit}>Search</Button>
        </form>
        <SearchResults results={results} handleSavedButton={handleSavedButton} />
        </>
    );
}


export default Search;
