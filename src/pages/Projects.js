import React from 'react';
import Project from '../components/Project'


export default function Projects() {
    // object for projects in my portfolio 
    const projects = [
        {
            title: 'CT Nest Quest',
            link: 'https://radiant-ridge-52062-42fcf9b129ea.herokuapp.com/',
            imagesrc: './images/ctnestquest.png',
            description: 'Find your familys nest today'
        },
        {
            title: 'Google Books Search',
            link: 'https://murmuring-retreat-53414-22991f2ca674.herokuapp.com/',
            imagesrc: './images/googlebooks.png',
            description: 'Find and save the right book for you'
        },
        {
            title: 'Tech Blog',
            link: 'https://floating-mesa-84754-e8d9e990531e.herokuapp.com/',
            imagesrc: './images/techblog.png',
            description: 'Connect with others in the Tech Industry'
        },
        {
            title: 'Note Taker',
            link: 'https://challenge-11-note-taker-mb-3d17b293aef1.herokuapp.com/notes',
            imagesrc: './images/notetaker.png',
            description: 'Write down notes you dont want to forget'
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