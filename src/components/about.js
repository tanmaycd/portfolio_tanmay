import React from 'react';
// import profileImg from '../assets/profile.jpg'; // Add a profile image in the assets folder

const About = () => {
  return (
    <section className="about" id="about">
      <div className="content">
        <img src={''} alt="Profile" className="profile-img" />
        <h2>About Me</h2>
        <p>Hi, I'm Your Name, a passionate web developer. I love creating beautiful and functional websites and applications. With a strong foundation in React.js and Node.js, I strive to build products that provide great user experiences.</p>
      </div>
    </section>
  );
};

export default About;
