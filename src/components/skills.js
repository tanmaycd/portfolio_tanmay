// import React, { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrowRight from "../images/Screenshot 2024-07-11 222427.png";    
//  import arrowLeft from "../images/Screenshot 2024-07-11 222434.png";    

// const projectsData = [
//   {
//     id: 1,
//     title: 'Music App',
//     description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
//     screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
//     demoLink: 'https://your-music-app-demo.com',
//     githubLink: 'https://github.com/yourusername/music-app'
//   },
//   {
//     id: 2,
//     title: 'Music App',
//     description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
//     screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
//     demoLink: 'https://your-music-app-demo.com',
//     githubLink: 'https://github.com/yourusername/music-app'
//   },
//   {
//     id: 3,
//     title: 'Music App',
//     description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
//     screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
//     demoLink: 'https://your-music-app-demo.com',
//     githubLink: 'https://github.com/yourusername/music-app'
//   },
//   {
//     id: 4,
//     title: 'Music App',
//     description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
//     screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
//     demoLink: 'https://your-music-app-demo.com',
//     githubLink: 'https://github.com/yourusername/music-app'
//   },
//   {
//     id: 5,
//     title: 'Music App',
//     description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
//     screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
//     demoLink: 'https://your-music-app-demo.com',
//     githubLink: 'https://github.com/yourusername/music-app'
//   },
//   {
//     id: 6,
//     title: 'Music App',
//     description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
//     screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
//     demoLink: 'https://your-music-app-demo.com',
//     githubLink: 'https://github.com/yourusername/music-app'
//   },
//   // Add more projects here
// ];

// const CustomLeftArrow = ({ onClick }) => (
//   <button onClick={() => onClick()} className="custom-arrow custom-left-arrow">
//      <img src={arrowLeft} alt="Left Arrow" />
//   </button>
// );

// const CustomRightArrow = ({ onClick }) => (
//   <button onClick={() => onClick()} className="custom-arrow custom-right-arrow">
//     <img src={arrowRight} alt="" />
//   </button>
// );

// function Projects() {
//   const [expandedProject, setExpandedProject] = useState(null);

//   const toggleDescription = (id) => {
//     setExpandedProject(expandedProject === id ? null : id);
//   };

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="project" id="projects">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="project-bx wow zoomIn">
//               <h2>Projects</h2>
//               <p>Here are some of the projects I have worked on.<br></br> Click on the images to view the demo or the source code.</p>
//               <Carousel 
//                 responsive={responsive} 
//                 infinite={true} 
//                 className="owl-carousel owl-theme project-slider"
//                 customLeftArrow={<CustomLeftArrow />}
//                 customRightArrow={<CustomRightArrow />}
//                 transitionDuration={500}
//               >
//                 {projectsData.map(project => (
//                   <div className="item" key={project.id}>
//                     <Carousel 
//                       responsive={responsive} 
//                       infinite={true} 
//                       className="nested-carousel"
//                       customLeftArrow={<CustomLeftArrow />}
//                       customRightArrow={<CustomRightArrow />}
//                       transitionDuration={500}
//                     >
//                       {project.screenshots.map((src, index) => (
//                         <img key={index} src={src} alt={`${project.title} Screenshot ${index + 1}`} />
//                       ))}
//                     </Carousel>
//                     <h5>{project.title}</h5>
//                     <p>
//                       {expandedProject === project.id ? project.description : `${project.description.substring(0, 100)}...`}
//                       <button className="toggle-description" onClick={() => toggleDescription(project.id)}>
//                         {expandedProject === project.id ? 'Show Less' : 'Show More'}
//                       </button>
//                     </p>
//                     <p>Technologies: {project.technologiesUsed.join(', ')}</p>
//                     <div className="project-links">
//                       <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
//                       <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
//                     </div>
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img className="background-image-left" src={'/path/to/background-image.png'} alt="Background" />
//     </section>
//   );
// }

// export default Projects;




import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Ensure these paths are correct based on your project structure
import arrowLeft from "../images/Screenshot 2024-07-11 222434.png";
import arrowRight from "../images/Screenshot 2024-07-11 222427.png";

const projectsData = [
  {
    id: 1,
    title: 'Music App',
    description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
    screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
    demoLink: 'https://your-music-app-demo.com',
    githubLink: 'https://github.com/yourusername/music-app'
  },
  {
    id: 2,
    title: 'Music App',
    description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
    screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
    demoLink: 'https://your-music-app-demo.com',
    githubLink: 'https://github.com/yourusername/music-app'
  },
  {
    id: 3,
    title: 'Music App',
    description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
    screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png', '/path/to/screenshots/music-app-3.png'],
    demoLink: 'https://your-music-app-demo.com',
    githubLink: 'https://github.com/yourusername/music-app'
  },
  // Add more projects here
];

const CustomLeftArrow = ({ onClick }) => (
  <button onClick={() => onClick()} className="custom-arrow custom-left-arrow" style={{ backgroundImage: `../images/Screenshot 2024-07-11 222434.png` }}></button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={() => onClick()} className="custom-arrow custom-right-arrow" style={{ backgroundImage: `url(${arrowRight})` }}></button>
);

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="project-bx wow zoomIn">
              <h2>Projects</h2>
              <p>Here are some of the projects I have worked on.<br></br> Click on the images to view the demo or the source code.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme project-slider"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                transitionDuration={500}
              >
                {projectsData.map(project => (
                  <div className="item" key={project.id}>
                    <Carousel 
                      responsive={responsive} 
                      infinite={true} 
                      className="nested-carousel"
                      customLeftArrow={<CustomLeftArrow />}
                      customRightArrow={<CustomRightArrow />}
                      transitionDuration={500}
                    >
                      {project.screenshots.map((src, index) => (
                        <img key={index} src={src} alt={`${project.title} Screenshot ${index + 1}`} />
                      ))}
                    </Carousel>
                    <h5>{project.title}</h5>
                    <p>
                      {expandedProject === project.id ? project.description : `${project.description.substring(0, 100)}...`}
                      <button className="toggle-description" onClick={() => toggleDescription(project.id)}>
                        {expandedProject === project.id ? 'Show Less' : 'Show More'}
                      </button>
                    </p>
                    <p>Technologies: {project.technologiesUsed.join(', ')}</p>
                    <div className="project-links">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={'/path/to/background-image.png'} alt="Background" />
    </section>
  );
}

export default Projects;
