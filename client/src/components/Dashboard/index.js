import React, { Component } from "react";
import Search from "../Search";
import CardSet from "../Cards";
import JumboScreen from "../Jumbotron";


function Dashboard() {
    return (
        <>
            <JumboScreen />
            <CardSet />
            {/* <Search /> */}
        </>
    );
}

export default Dashboard;