import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Being part of the IEEE Student Branch was the highlight of my college career. It opened doors to my current job at Google.",
      author: "Sarah Jenkins",
      title: "Software Engineer, Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      quote: "The mentorship and networking opportunities I received here were invaluable. I truly found my passion for robotics.",
      author: "David Kim",
      title: "Robotics Researcher, MIT",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      quote: "Volunteering as a treasurer taught me leadership skills that I use daily in my management role. Highly recommended!",
      author: "Emily Chen",
      title: "Product Manager, Microsoft",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="block text-ieee-blue font-bold tracking-widest uppercase text-sm mb-3">Community Voices</span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6">Student Success Stories</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">Hear from our alumni and members about how IEEE shaped their professional journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((item, index) => (
            <div 
                key={item.id} 
                className="bg-gray-50 p-8 rounded-2xl relative border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-ieee-blue text-white rounded-full flex items-center justify-center border-4 border-white shadow-md">
                <Quote className="w-5 h-5 fill-current" />
              </div>

              <div className="mt-8 mb-6 italic text-gray-700 leading-relaxed font-light text-lg">
                "{item.quote}"
              </div>

              <div className="mt-auto flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-white shadow-sm">
                    <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                 </div>
                 <h4 className="font-bold text-gray-900 text-lg">{item.author}</h4>
                 <p className="text-sm text-gray-500 font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
