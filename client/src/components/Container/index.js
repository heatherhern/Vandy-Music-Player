import React, { Component } from "react";
let axios = require('axios');
import API from '../../utils/API';

class Container extends Component {
    state = {
        results: [],
    };

    initialResultsList;

    componentDidMount() {
        console.log("Component successfully mounted");
        this.getResults();
    }

    getArtist = () => {
        API.getArtist()
            .then((res) => {
                this.initialResultsList = res.data.results;
                this.setState({ results: res.data.results });
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div className="container">
                {/* <Search handleInputChange={this.handleInputChange} />
                <Table employees={this.state.employees} sortNames={this.sortNames} /> */}
            </div>
        );
    }
}

export default Container;