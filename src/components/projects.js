// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./projectsub";
// // import projImg1 from "../assets/img/project-img1.png";
// // import projImg2 from "../assets/img/project-img2.png";
// // import projImg3 from "../assets/img/project-img3.png";
// // import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

//  function Project(){

//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: '',
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: '',
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: '',
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: '',
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: '',
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: '',
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={''}></img>
//     </section>
//   )
// }
// export default Project




// import React from 'react';
// // import project1Img from '../assets/project1.jpg'; // Example image, add actual images in assets folder
// // import project2Img from '../assets/project2.jpg'; // Example image, add actual images in assets folder

// const Projects = () => {
//   const projects = [
//     {
//       title: "Project Title 1",
//       description: "Brief overview of Project 1.",
//       technologies: ["React", "Node.js", "PostgreSQL"],
//       image: '',
//       demoLink: "https://demo1.com",
//       githubLink: "https://github.com/username/project1"
//     },
//     {
//       title: "Project Title 2",
//       description: "Brief overview of Project 2.",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       image: '',
//       demoLink: "https://demo2.com",
//       githubLink: "https://github.com/username/project2"
//     }
//   ];

//   return (
//     <section className="projects" id="projects">
//       <div className="content">
//         <h2>Project Showcase</h2>
//         {projects.map((project, index) => (
//           <div className="project" key={index}>
//             <img src='' alt={project.title} />
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
//             {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>}
//             {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React, { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Modal from 'react-modal';
// // import project1Img from '../assets/project1.jpg'; // Example image, replace with actual images
// // import project2Img from '../assets/project2.jpg'; // Example image, replace with actual images

// const Projects = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       title: "Project Title 1",
//       description: "Brief overview of Project 1.",
//       technologies: ["React", "Node.js", "PostgreSQL"],
//       image: '',
//       demoLink: "https://demo1.com",
//       githubLink: "https://github.com/username/project1"
//     },
//     {
//       title: "Project Title 2",
//       description: "Brief overview of Project 2.",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       image: '',
//       demoLink: "https://demo2.com",
//       githubLink: "https://github.com/username/project2"
//     }
//   ];

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalIsOpen(true);
//   }

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedProject(null);
//   }

//   const responsive = {
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
//     <section className="projects" id="projects">
//       <div className="content">
//         <h2>Project Showcase</h2>
//         <Carousel responsive={responsive}>
//           {projects.map((project, index) => (
//             <div className="project-card" key={index} onClick={() => openModal(project)}>
//               <div className="project-card-inner">
//                 <div className="project-card-front">
//                   <img src='' alt={project.title} />
//                   <h3>{project.title}</h3>
//                 </div>
//                 <div className="project-card-back">
//                   <p>{project.description}</p>
//                   <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
//                   {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>}
//                   {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//         {selectedProject && (
//           <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="project-modal" overlayClassName="project-modal-overlay">
//             <h2>{selectedProject.title}</h2>
//             <img src={selectedProject.image} alt={selectedProject.title} />
//             <p>{selectedProject.description}</p>
//             <p><strong>Technologies Used:</strong> {selectedProject.technologies.join(", ")}</p>
//             {selectedProject.demoLink && <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>}
//             {selectedProject.githubLink && <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
//             <button onClick={closeModal}>Close</button>
//           </Modal>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useState } from 'react';
// Assuming you have a CSS file for styling

const projectsData = [
  {
    id: 1,
    title: 'Music App',
    description: 'A full-stack music streaming application with user authentication, playlists, favorites, and song playback functionalities.',
    technologiesUsed: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
    screenshots: ['/path/to/screenshots/music-app-1.png', '/path/to/screenshots/music-app-2.png'],
    demoLink: 'https://your-music-app-demo.com',
    githubLink: 'https://github.com/yourusername/music-app'
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'An online marketplace for buying and selling goods, featuring product listings, cart functionality, and secure payments.',
    technologiesUsed: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    screenshots: ['/path/to/screenshots/ecommerce-1.png', '/path/to/screenshots/ecommerce-2.png'],
    demoLink: 'https://your-ecommerce-website.com',
    githubLink: 'https://github.com/yourusername/ecommerce-website'
  },
  {
    id: 3,
    title: 'Student Management System',
    description: 'A web-based application for managing student records, grades, and course enrollments for educational institutions.',
    technologiesUsed: ['React.js', 'Java', 'Spring Boot', 'MySQL'],
    screenshots: ['/path/to/screenshots/student-mgmt-1.png', '/path/to/screenshots/student-mgmt-2.png'],
    demoLink: 'https://your-student-mgmt-system.com',
    githubLink: 'https://github.com/yourusername/student-mgmt-system'
  }
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projectsData[0]);

  const handleProjectChange = (projectId) => {
    const project = projectsData.find(proj => proj.id === projectId);
    setCurrentProject(project);
  };

  return (
    <div className="projects-container">
      <h2>Project Showcase</h2>
      <div className="projects">
        {projectsData.map(project => (
          <div key={project.id} className={`project ${currentProject.id === project.id ? 'active' : ''}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologiesUsed.join(', ')}</p>
            <div className="project-images">
              {project.screenshots.map((screenshot, index) => (
                <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
              ))}
            </div>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <div className="project-navigation">
        {projectsData.map(project => (
          <button key={project.id} onClick={() => handleProjectChange(project.id)}>
            {project.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;


// import React, { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import './Projects.css'; // Make sure to adjust the CSS file path accordingly
// import arrowLeft from '../assets/img/arrow-left.svg';
// import arrowRight from '../assets/img/arrow-right.svg';
// import project1Image from '../assets/img/project1.jpg'; // Adjust the image paths as per your actual project structure
// import project2Image from '../assets/img/project2.jpg';
// import project3Image from '../assets/img/project3.jpg';

// const projectsData = [
//   {
//     title: "Project 1",
//     description: "Description of Project 1.",
//     technologiesUsed: ["React", "Node.js", "Express", "PostgreSQL"],
//     // screenshots: '',
//     demoLink: "https://demo.com",
//     githubLink: "https://github.com/project1"
//   },
//   {
//     title: "Project 2",
//     description: "Description of Project 2.",
//     technologiesUsed: ["HTML", "CSS", "JavaScript"],
//     // screenshots: ''
//     demoLink: "https://demo.com/project2",
//     githubLink: "https://github.com/project2"
//   },
//   {
//     title: "Project 3",
//     description: "Description of Project 3.",
//     technologiesUsed: ["Angular", "Firebase"],
//     // screenshots: [''],
//     demoLink: "https://demo.com/project3",
//     githubLink: "https://github.com/project3"
//   }
// ];

// const Projects = () => {
//   const [currentProject, setCurrentProject] = useState(0);

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 1
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   const nextProject = () => {
//     setCurrentProject((currentProject + 1) % projectsData.length);
//   };

//   const prevProject = () => {
//     setCurrentProject((currentProject - 1 + projectsData.length) % projectsData.length);
//   };

//   return (
//     <section id="projects" className="skill">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="skill-bx wow zoomIn">
//               <h2>Project Showcase</h2>
//               <Carousel
//                 responsive={responsive}
//                 infinite={true}
//                 className="owl-carousel owl-theme skill-slider"
//                 customButtonGroup={<CustomButtonGroup />}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile"]}
//               >
//                 {projectsData.map((project, index) => (
//                   <div className="item" key={index}>
//                     <img src={project.screenshots[0]} alt={`Project ${index + 1}`} />
//                     <h5>{project.title}</h5>
//                     <p>{project.description}</p>
//                     <div className="project-actions">
//                       <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Demo</a>
//                       <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
//                     </div>
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const CustomButtonGroup = ({ next, previous }) => {
//   return (
//     <div className="custom-button-group">
//       <button className="custom-prev" onClick={() => previous()}>
//         <img src='' alt="Prev" />
//       </button>
//       <button className="custom-next" onClick={() => next()}>
//         <img src='' alt="Next" />
//       </button>
//     </div>
//   );
// };

// export default Projects;
