import React, { Component } from "react";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import "./container.css";

class Container extends Component {
    state = {
        results: [],
    };

    initialResultsList;

    componentDidMount() {
        console.log("Component successfully mounted");
        this.getResults();
    }

    getResults = () => {
        API.getResults()
            .then((res) => {
                this.initialResultsList = res.data.results;
                this.setState({ results: res.data.results });
            })
            .catch((err) => console.log(err));
    };

    handleInputChange = (e) => {
        const searchQuery = e.target.value;
        console.log(searchQuery);
        this.setState({ results: this.initialResultsList });
    }

    render() {
        return (
            <div className="container">
                <Search handleInputChange={this.handleInputChange} />
            </div>
        );
    };
}

export default Container;