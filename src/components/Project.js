import React, { useState } from 'react';



export default function Project(props) {

    // dynamically loading projects from portfolio page into project component 
    return (
        <div className="card">
        <div className="card-header">
            <a href={props.data.link} target="_blank">
                <img src={props.data.imagesrc} alt="Project card" />
            </a>
            <h4>{props.data.title}</h4>
        </div>

        <p>

            {props.data.description}

        </p>


    </div>
);
        
}
