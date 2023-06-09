import React from 'react';
import './assests/css/style.css';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to My Portfolio</h2>
      <div className="text-center">
        <img
          src="https://picsum.photos/200"
          alt="Ayshah Malik"
          className="avatar"
        />
        <h3>Hello, I'm Ayshah Malik</h3>
        <p>A passionate Computer Science student with a keen interest in web development and user experience (UX).
        I am dedicated to creating intuitive and user-friendly web experiences that combine my technical skills with a strong focus on user needs and aesthetics.
        With a methodical approach to problem-solving and a creative mindset, I strive to create visually appealing and engaging websites that provide a seamless user experience.</p>
        <p>I am excited to showcase my projects and share my passion for web development and UX through this portfolio.</p>
      </div>
    </div>
  );
}

export default Home;
