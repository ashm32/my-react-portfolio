import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary action with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>Email address: ash.m32@icloud.com</p>
      <p>
        <a href="/Users/ayshahmalik/Downloads/react portfolio/my-portfolio/src/assests/uob cv.pdf">Download CV (PDF)</a>
      </p>
      <p>
        <a href="https://github.com/ashm32">GitHub Profile</a>
      </p>
      <p>
        <a href="https://linkedin.com/in/ayshah-malik">LinkedIn Profile</a>
      </p>
      <h3>Send a Message</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={handleMessageChange} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
