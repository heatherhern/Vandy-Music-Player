import { React, useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import API from '../../utils/API';

function Search() {
    const { register, handleSubmit } = useForm();
    const [results, setResultsState] = useState([]);

    const onSubmit = (data) => {
        let searchQuery = data.searchQuery;

        API.getArtist(searchQuery).then(function(data){
            let res = [];
            res.push(data);
            
            res = res.map(result => {
                result = {
                    song: data.data.toptracks.track.name,
                    artist: searchQuery,
                    albumArt: data.data.toptracks.track.image[2],
                }
                return result;
            });
            console.log(data);
            setResultsState(results.concat(res));
        });
        // API.getAlbum(searchQuery);
        // API.getSong(searchQuery);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="searchQuery" className="searchQuery" placeholder="Search by Artist" ref={register}/>

            <input type="submit" className="submit-btn" />
        </form>
    );
}

export default Search;