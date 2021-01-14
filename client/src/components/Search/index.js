import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import API from '../../utils/API';

function Search() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        let searchQuery = data.searchQuery;
        
        API.getArtist(searchQuery).then(function(data){
            console.log(data);
        });
        
        console.log(data);
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