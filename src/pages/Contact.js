import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing default
        e.preventDefault();

        //check if valid email
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        // clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
    };

    const handleNoMessage = (e) => {
        const { target } = e;
        const inputValue = target.value;
        
        if(inputValue === '') {
            setErrorMessage('Message field is required');
        }
        
    };


    return (
        <div>
            <form className="form">
            <h2>Contact Me</h2>
            <h3>Name:</h3>
                <input
                    value={Name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <h3>Email:</h3>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <h3>Message:</h3>
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onMouseOut={handleNoMessage}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}