// import React from 'react';
// import './Portfolio.css';
// import sr from './ScrollReveal'
// import FolioData from "./FolioData"
// import Project from "./Project"
// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

// export class Portfolio extends React.Component {

//     componentDidMount = () => {
//         const config = {
//           origin: 'right',
//           duration: 500,
//           delay: 100,
//           distance: '50px',
//           scale: 1,
//           easing: 'ease',
//         }
//         sr.reveal(this.refs.i, config)
//         const config2 = {
//             origin: 'right',
//             duration: 500,
//             delay: 200,
//             distance: '50px',
//             scale: 1,
//             easing: 'ease',
//           }
//           sr.reveal(this.refs.ii, config2)
//           const config3 = {
//             origin: 'right',
//             duration: 500,
//             delay: 300,
//             distance: '50px',
//             scale: 1,
//             easing: 'ease',
//           }
//           sr.reveal(this.refs.iii, config3)
//           const config4 = {
//             origin: 'right',
//             duration: 500,
//             delay: 400,
//             distance: '50px',
//             scale: 1,
//             easing: 'ease',
//           }
//           sr.reveal(this.refs.iv, config4)
//           const config5 = {
//             origin: 'left',
//             duration: 500,
//             delay: 200,
//             distance: '50px',
//             scale: 1,
//             easing: 'ease',
//           }
//           sr.reveal(this.refs.v, config5)
//           const config6 = {
//             origin: 'left',
//             duration: 500,
//             delay: 400,
//             distance: '50px',
//             scale: 1,
//             easing: 'ease',
//           }
//           sr.reveal(this.refs.vi, config6)
//     }

//     filterProjects() {
//         let proj = [];
//         for (var i=0; i < FolioData.projects.length; i++) {
//             var valid = true;
//             let filters = FolioData.projects[i].filters;
//             for (var j=0; j < this.props.filters.length; j++) {
//                 if (!filters.includes(this.props.filters[j])) {
//                     valid = false;
//                     console.log("invalid", "proj filters: ", filters, "props needed: ", this.props.filters);
//                     break;
//                 }
//             }
//             if (valid) {
//                 console.log("valid: ", FolioData.projects[i].name);
//                 proj = proj.concat([FolioData.projects[i]])
//             }
//         }
//         console.log("all valid projs:");
//         for (var i=0; i < proj.length; i++) {
//             console.log(proj.name);
//         }
//         return proj;
//     }

//     render(){
//         return (
//             <div>
//                 <div id="container">
//                     <div>
//                         {this.filterProjects().map((project, index) =>
//                             <Project id={project.id} name={project.name} description={project.description} date={project.date} tags={project.tags} index={index} />
//                             )}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default Portfolio;