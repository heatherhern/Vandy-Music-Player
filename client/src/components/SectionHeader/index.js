import React from 'react'
import "./style.css";

function SectionHeader(props) {
    return (
        <div>
            <h2 className="sectionHeader">{props.sectionTitle}</h2>
        </div>
    );
}

export default SectionHeader
