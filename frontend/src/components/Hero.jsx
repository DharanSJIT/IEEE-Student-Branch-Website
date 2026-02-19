import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden text-white pt-20 pb-16">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540339832862-43d696ab1539?ixidx=2&auto=format&fit=crop&w=2560&q=80')` }}
      >
        <div className="absolute inset-0 bg-ieee-dark/80 backdrop-blur-[2px]"></div> {/* Blue Overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 md:mb-8 animate-fade-in shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-xs md:text-sm font-medium tracking-wide">Innovating for a Better Tomorrow</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold  text-white mb-6 animate-slide-up animation-delay-200 drop-shadow-lg px-2">
          Advancing Technology <br className="hidden sm:block"/>
          <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
            for Humanity
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 leading-relaxed font-light animate-fade-in animation-delay-400 px-4">
          Join the world's largest technical professional organization for the advancement of technology.
          Empowering students to drive innovation and excellence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 animate-scale-in animation-delay-600 px-4 mb-12 sm:mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-ieee-blue font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
            Become a Member
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link 
            to="/#chapters"
            className="w-full sm:w-auto px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 text-center"
          >
            Explore Chapters
          </Link>
        </div>

        {/* Stats */}
        <div className="w-full max-w-4xl mx-auto border-t border-white/10 pt-8 animate-fade-in animation-delay-800">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 opacity-80">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading">4+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1">Technical Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading">50+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1">Annual Events</div>
            </div>
            <div className="col-span-2 md:col-span-1 text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading">200+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1">Active Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
