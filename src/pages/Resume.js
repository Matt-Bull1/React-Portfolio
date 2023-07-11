import React from 'react';

export default function Resume() {

    //resume page html
    return (
        <div>
            <h2>Resume</h2>

            <h3>Back-end Proficiencies:</h3>

            <ul className='resume'>
                <li>Node</li>
                <li>APIs</li>
                <li>Express</li>
                <li>MySQL/Sequilize</li>
                <li>NOSQL</li>
            </ul>

            <h3>Front-end Proficiencies:</h3>

            <ul className='resume'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
        </div>
    );
}