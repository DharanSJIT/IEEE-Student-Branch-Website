import React from 'react';

const Partners = () => {
    const sponsors = [
        { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-1-1.svg' },
        { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
        { name: 'IBM', logo: 'https://cdn.worldvectorlogo.com/logos/ibm.svg' },
        { name: 'Intel', logo: 'https://cdn.worldvectorlogo.com/logos/intel.svg' },
        { name: 'Cisco', logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg' },
        { name: 'Nvidia', logo: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg' },
    ];

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">
                    Our Industry Partners & Sponsors
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {sponsors.map((partner, idx) => (
                        <div key={idx} className="group relative w-32 h-12 md:w-40 md:h-16 flex items-center justify-center">
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="max-w-full max-h-full object-contain filter group-hover:drop-shadow-lg transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
