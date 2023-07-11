import React from 'react';
import Project from '../Project'


export default function Projects() {
    // object for projects in my portfolio 
    const projects = [
        {
            title: 'CT Nest Quest',
            link: 'https://radiant-ridge-52062-42fcf9b129ea.herokuapp.com/',
            imagesrc: './images/ctnestquest.png',
            description: 'Find your familys nest today'
        },
    ];
    //html for the text on projects page
    return (
        <div>
            <section className="projects">

            {
                projects.map((project) => <Project data={project}/>)
            }

            </section>
        </div>
    );
}