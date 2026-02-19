import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "Tech Talk" },
    { id: 2, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "Workshop" },
    { id: 3, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "Conference" },
    { id: 4, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "Meeting" },
    { id: 5, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "Hackathon" },
    { id: 6, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", category: "Lab Session" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ieee-blue font-bold tracking-widest text-sm uppercase">Our Memories</span>
          <h2 className="text-4xl font-heading font-extrabold text-gray-900 mt-2">Gallery</h2>
          <div className="w-24 h-1 bg-ieee-blue mx-auto mt-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Glimpses of our recent events, workshops, and community gatherings.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
           {images.map((img, idx) => (
             <div 
                key={img.id} 
                className={`relative group rounded-xl overflow-hidden cursor-pointer ${idx === 0 || idx === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => setSelectedImage(img)}
             >
                <img 
                    src={img.src} 
                    alt={img.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                        <span className="text-white font-bold tracking-wide uppercase text-sm">{img.category}</span>
                    </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
                <X className="w-8 h-8" />
            </button>
            <div className="max-w-5xl w-full max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
                <img 
                    src={selectedImage.src} 
                    alt={selectedImage.category} 
                    className="w-full h-full object-contain rounded-lg shadow-2xl" 
                />
                <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-2 rounded text-white font-medium backdrop-blur-md">
                    {selectedImage.category}
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
