import React from 'react';
import { ArrowRight, Calendar, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full bg-white pt-20 pb-0 md:pt-0 md:h-screen flex flex-col md:flex-row items-center overflow-hidden">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 sm:px-12 lg:px-20 py-12 md:py-0 bg-white z-10">
        <div className="max-w-xl w-full animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-50 text-ieee-blue text-xs font-bold uppercase tracking-wider mb-6 border-l-4 border-ieee-blue">
              Student Branch
           </div>
           
           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight font-heading">
             Inspiring <br/>
             <span className="text-ieee-blue">Global Innovation</span> <br/>
             Locally
           </h1>
           
           <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
             We are a dynamic ecosystem of student innovators, technical enthusiasts, and future leaders dedicated to professional empathy and engineering excellence.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 mb-12">
             <button className="px-8 py-4 bg-ieee-blue text-white font-semibold rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-sm">
               Become a Member <ArrowRight className="w-4 h-4" />
             </button>
             <Link 
                to="/events" 
                className="px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-md hover:border-ieee-blue hover:text-ieee-blue transition-colors bg-white flex items-center justify-center"
             >
               Explore Activities
             </Link>
           </div>
           
           <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                 <div className="text-3xl font-bold text-gray-900 mb-1">4+</div>
                 <div className="text-xs text-gray-500 font-medium uppercase">Societies</div>
              </div>
              <div>
                 <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                 <div className="text-xs text-gray-500 font-medium uppercase">Events</div>
              </div>
              <div>
                 <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
                 <div className="text-xs text-gray-500 font-medium uppercase">Members</div>
              </div>
           </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative bg-gray-50">
         <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
            alt="IEEE Students Collaborating" 
            className="w-full h-full object-cover"
         />
         {/* Clean Overlay - No Gradients */}
         <div className="absolute inset-0 bg-ieee-blue/10 mix-blend-multiply"></div> 
      </div>
    </section>
  );
};

export default Hero;

