import React from 'react';

export default function About() {
    //about me section image and intro
    return (
        <div className='about-me'>
            <section>
                <div className='card-header'>
                <h2 id="about-me">About Me</h2>
                    <img class="headshot" src="images/headshot.jpg" alt="My Picture" />
                </div>

                <p className='about-intro'>

                    Hi my name is Matthew Bull, I have recently been learning web development and have enjoyed picking up the new skill and creating projects. 
                    During my free time I enjoy traveling and hanging out with my friends and family. To destress I like to read, play video games, and work on passion projects.
                    Thank you for viewing my Portfolio, feel free to check out my projects and if you have any questions please contact me!.

                </p>
            </section>
        </div>
    );
}