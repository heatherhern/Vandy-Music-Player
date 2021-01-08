import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

function Search() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="searchQuery" placeholder="Search by Artist, Album, or Song" ref={register}/>

            <input type="submit" className="submit-btn" />
        </form>
    );
}

export default Search;