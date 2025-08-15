// import { ArrowRight,ExternalLink,Github } from "lucide-react";


// const projects = [
//     {
//          id : 1,
//          title : "Jobby App",
//          description : "A feature-rich platform enabling users to search and filter jobs by type, salary range, and keywords. Includes secure JWT authentication, smooth routing, and robust error handling for a seamless and user-friendly experience.",
//          image : "/projects/Jobby_app.jpg",
//          tags : ["React", "JavaScript", "CSS"],
//          demoUrl : "",
//          githubUrl : "https://github.com/Chimirala970/jobbyApp", 
//     }
//     ,
//     {
//          id : 2,
//          title : "Road Accident Analysis",
//          description : "Interactive dashboard showcasing accident trends with filters for weather, road conditions, and location, helping identify high-risk areas through visual insights.",
//          image : "/projects/Road_Accident_Analysis.jpg",
//          tags : ["PowerBI"],
//          demoUrl : "https://drive.google.com/file/d/1wHiT8Yu_uI7dv_5lu1twFTc0fT-W3y9o/view?usp=sharing",
//          githubUrl : "", 
//     },
//     {
//         id : 3,
//         title : "Ecommerce Application",
//         description : "Built a product details feature with authentication-based routing, API integration for fetching product and similar items, and interactive quantity controls. Implemented loading, error handling, and seamless navigation for an enhanced user experience.",
//         image : "/projects/EcommerceImg.jpg",
//         tags : ["React", "JavaScript", "CSS"],
//         demoUrl : "",
//         github : "https://github.com/Chimirala970/NxrwaveTrendz_specifiProduct", 
//     },
//     {
//         id : 4,
//         title : "Meesho E-Commerce App – UI/UX Clone (Figma)",
//         description : "Designed a responsive Meesho mobile app UI clone in Figma Replicated core e-commerce screens including home, product listing, and cart.Ensured consistent layout, color scheme, and typography for a polished look.",
//         image : "/projects/MeeshoFigma.jpg",
//         tags : ["Figma", "UI/UX", "Prototyping", "Mobile Design"],
//         demoUrl : "https://www.figma.com/design/7VXm80ixfSIimIiQfAtNuh/Meesho_app?node-id=0-1&p=f",
//         github : "https://github.com/Chimirala970/NxrwaveTrendz_specifiProduct", 
//     }
// ]

// export const ProjectsSection = () =>{
//     return(<section id="projects" className="py-24 px-4 relative">
//            <div className="container mx-auto max-w-5xl">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//                 Featured <span className="text-primary">Projects</span>
//             </h2>
//              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//                 Here are some of my recent projects. Each project was carefully 
//                 crafted with attention to detail, performance, and user experience.
//              </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   { projects.map((project,key) => (
//                       <div key={key} className= "group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

//                                 <div className="h-48 overflow-hidden">
//                                           <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "/>
//                                     </div>

//                                     <div className="p-6">
//                                          <div className="flex flex-wrap gap-2 mb-4">
//                                              {project.tags.map((tag)=>(
//                                                 <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">
//                                                     {tag}
//                                                 </span>
//                                              ))}
//                                             </div>
                                       

//                                         <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
//                                         <p className="text-muted-foreground text-sm mb-4">
//                                             {project.description}
//                                         </p>
//                                         <div className="flex justify-between items-center"> 
//                                             <div className="flex space-x-3">
//                                                 <a href={project.demoUrl} 
//                                                 target= "_blank"
//                                                 className="text-foreground/80 hover:text-primary transition-colors duration-300">    
//                                                     <ExternalLink size={30}/>
//                                                  </a>
//                                                   <a href={project.githubUrl}
//                                                   target="_blank" 
//                                                   className="text-foreground/80 hover:text-primary transition-colors duration-300">    
//                                                     <Github size={20}/>
//                                                  </a>
//                                                 </div>
//                                             </div>
//                                      </div>
//                         </div>
//                    ))

//                   }
//               </div>
//                   <div className="text-center mt-12">
//                       <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
//                        href="https://github.com/Chimirala970" 
//                       target="_blank">
//                         Check My Github <ArrowRight size={16}/>
//                       </a>
//                   </div>
//            </div>
        
//           </section>); 
// }; 






import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Jobby App",
    description:
      "A feature-rich platform enabling users to search and filter jobs by type, salary range, and keywords. Includes secure JWT authentication, smooth routing, and robust error handling for a seamless and user-friendly experience.",
    image: "/projects/Jobby_app.jpg",
    tags: ["React", "JavaScript", "REST API", "JWT Authentication"],
    demoUrl: "https://jobbyapppriya.ccbp.tech/login",
    githubUrl: "https://github.com/Chimirala970/jobbyApp",
  },
  {
    id: 2,
    title: "Road Accident Analysis",
    description:
      "Interactive dashboard showcasing accident trends with filters for weather, road conditions, and location, helping identify high-risk areas through visual insights.",
    image: "/projects/Road_Accident_Analysis.jpg",
    tags: ["PowerBI"],
    demoUrl: "https://drive.google.com/file/d/1wHiT8Yu_uI7dv_5lu1twFTc0fT-W3y9o/view?usp=sharing",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Ecommerce Application",
    description:
      "Built a product details feature with authentication-based routing, API integration for fetching product and similar items, and interactive quantity controls. Implemented loading, error handling, and seamless navigation for an enhanced user experience.",
    image: "/projects/EcommerceImg.jpg",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://ecommercepriya.ccbp.tech/products",
    githubUrl: "https://github.com/Chimirala970/NxrwaveTrendz_specifiProduct",
  },
  {
    id: 4,
    title: "Meesho E-Commerce App – UI/UX Clone (Figma)",
    description:
      "Designed a responsive Meesho mobile app UI clone in Figma. Replicated core e-commerce screens including home, product listing, and cart. Ensured consistent layout, color scheme, and typography for a polished look.",
    image: "/projects/MeeshoFigma.jpg",
    tags: ["Figma", "UI/UX", "Prototyping", "Mobile Design"],
    demoUrl:
      "https://www.figma.com/design/7VXm80ixfSIimIiQfAtNuh/Meesho_app?node-id=0-1&p=f",
    githubUrl: "",
  },
  {
     id: 5,
    title: "Travel Guru App",
    description:
      "Travel Guru is an Android app that simplifies group trip planning with personalized recommendations. It integrates itineraries, hotels, transport options, and budgets while offering an intuitive, user-friendly interface.",
    image: "/projects/TravelGuru11.jpg",
    tags: ["Kotlin", "JetPackCompose", "XML"],
    demoUrl:
      "https://drive.google.com/file/d/1yQfemu9YRU9P5zw81RD3f62pkZNqUPL2/view?usp=sharing",
    githubUrl: "https://github.com/smartinternz02/SI-GuidedProject-587257-1696856851",

  },
  {
     id: 6,
    title: "NxtWatch – Video Streaming App",
    description:
      "Built a responsive YouTube-like video streaming app using React.js, styled-components, and REST APIs with JWT authentication and protected routes. Implemented dark/light themes, video search, interactive video pages, and state management via React Context API.",
    image: "/projects/nxtwatchapp_img.jpg",
    tags: ["ReactJS", "JavaScript", "REST API", "JWT Authentication"],
    demoUrl:
      "https://youtubewatpri.ccbp.tech/",
    githubUrl: "https://github.com/smartinternz02/SI-GuidedProject-587257-1696856851",

  }
];

export const ProjectsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/80 z-20"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary/80 z-20"
        >
          <ChevronRight size={20} />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pb-4"
        >
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex-shrink-0 w-80 snap-center"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Chimirala970"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
