import { Code, User, Briefcase } from "lucide-react";


export const AboutSection = () =>{
     return(
     <section id="about" className= "py-24 px-4 relative">
       <div className="container mx-auto max-w-5xl">
          <h2 className= "text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className= "text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             <div className="space-y-6">
                <h3 className= "text-2xl font-bold">
                   Innovative Full-Stack Developer & Problem Solver
                </h3>


                <p className="text-gray-900 text-muted-foreground text-lg font-normal italic leading-relaxed tracking-wide">
                  I’m a passionate full-stack developer and tech enthusiast who enjoys turning ideas into 
                  functional, user-friendly solutions. Beyond development, I have experience with data visualization, dashboard creation, and 
                  AI-driven automation to optimize processes and improve decision-making.
                  </p>

                  <p className="text-gray-900 text-muted-foreground text-lg font-normal italic leading-relaxed tracking-wide mt-4">
                  I love taking on challenges, learning new tools, and blending creativity with problem-solving to deliver 
                  impactful projects.
                  </p>


                <div className= "flex flex-col sm:flex-row gap-4 pt-4 justify-center"> 
                   <a href="#contact" className="cosmic-button">
                    Get In Touch
                    </a> 
                    <a href= "https://drive.google.com/file/d/1y2QbcZ1CeD5bXM1GcQpWDMENvrcU46ao/view?usp=sharing"
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                      Download CV
                    </a> 
                </div>
             </div>

             <div className= "grid grid-cols-1 gap-6"> 
                 <div className= "gradient-border p-6 card-hover">
                    <div className= "flex items-start gap-4">
                       <div className="p-3 rounded-full bg-primary/10">
                          <Code className="h-6 w-6 text-primary"/> 
                        </div>
                        <div className= "text-left">
                                 <h4 className="font-semi-bold text-lg">Web Development</h4>
                                 <p className="text-muted-foreground">
                                    Creating responsive websites and web aplications with 
                                    modern frameworks. 
                                 </p>
                        </div>
                    </div>
                 </div>

                 <div className= "gradient-border p-6 card-hover">
                    <div className= "flex items-start gap-4">
                       <div className="p-3 rounded-full bg-primary/10">
                          <User className="h-6 w-6 text-primary"/> 
                        </div>
                        <div className= "text-left">
                                 <h4 className="font-semi-bold text-lg">UI/UX Design</h4>
                                 <p className="text-muted-foreground">
                                    Designing intuitive user interfaces and seamless user
                                    experiences.
                                 </p>
                        </div>
                    </div>
                 </div>

                <div className= "gradient-border p-6 card-hover">
                    <div className= "flex items-start gap-4">
                       <div className="p-3 rounded-full bg-primary/10">
                          <Briefcase className="h-6 w-6 text-primary"/> 
                        </div>
                        <div className= "text-left">
                                 <h4 className="font-semi-bold text-lg"> Project Management</h4>
                                 <p className="text-muted-foreground">
                                    Leading projects from conception to completion with agile
                                    methodologies.
                                 </p>
                        </div>
                    </div>
                 </div>

             </div>
    
          </div>

       </div>
     
     </section>); 
}