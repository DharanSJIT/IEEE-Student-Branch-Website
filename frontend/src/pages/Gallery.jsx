import React from 'react';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="bg-ieee-blue text-white py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Event Gallery</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Capturing moments of innovation, learning, and collaboration.
                    </p>
                </div>
            </div>
            <Gallery />
        </div>
    );
};

export default GalleryPage;
