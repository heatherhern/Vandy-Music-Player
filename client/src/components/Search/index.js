import { React, useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import SearchResults from "../SearchResults";
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';

function Search() {
    const { register, handleSubmit } = useForm();
    const [results, setResultsState] = useState([]);

    const onSubmit = (data) => {
        let searchQuery = data.searchQuery;

        API.getArtist(searchQuery).then(function (data) {
            let res = [];

            res = data.data.toptracks.track.map(result => {
            const song = {
                    song: result.name,
                }
                return song;
            });
            console.log(res);
            console.log(data);
            setResultsState(res);
        });  
    }

    const handleSavedButton = song => {
        API.saveSong(song)
            .then(function(data) {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="searchQuery" className="searchQuery" placeholder="Search by Artist" ref={register} />
            <Button variant="primary" className="submit-btn">Submit</Button>
            {/* <input type="submit" className="submit-btn" /> */}
        </form>
        <SearchResults results={results} handleSavedButton={handleSavedButton} />
        </>
    );
}


export default Search;
