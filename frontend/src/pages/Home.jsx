import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Chapters from '../components/Chapters';
import Benefits from '../components/Benefits';
import NewsSection from '../components/NewsSection';
import Events from '../components/Events';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Resources from '../components/Resources';
import Partners from '../components/Partners';

function Home() {
    const location = useLocation();

    // Handle scroll to hash on mount or change
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="font-sans text-gray-900 bg-white">
            <Hero />
            <Stats />
            <div id="about"><About /></div>
            <div id="chapters"><Chapters /></div>
            <NewsSection />
            <div id="events"><Events /></div>
            <div id="benefits"><Benefits /></div>
            <div id="resources"><Resources /></div>
            <div id="team"><Team /></div>
            <Partners />
            <div id="contact"><Contact /></div>
        </div>
    );
}

export default Home;
