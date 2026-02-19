import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Subscribed with ${email}`);
        setEmail('');
    };

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-full bg-white text-ieee-blue flex items-center justify-center font-bold text-xl">
                                IE
                            </div>
                            <div className="font-heading font-bold text-xl text-white tracking-tight">
                                IEEE <span className="font-medium opacity-70">SB</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Empowering students to build a better tomorrow through technology, innovation, and professional excellence. Join the world's largest technical community today.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-ieee-blue hover:text-white transition-colors duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-ieee-blue hover:text-white transition-colors duration-300">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-ieee-blue hover:text-white transition-colors duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-ieee-blue hover:text-white transition-colors duration-300">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-ieee-blue"></span>
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-ieee-blue rounded-full"></span> Home</Link></li>
                            <li><Link to="/about" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-ieee-blue rounded-full"></span> About Us</Link></li>
                            <li><Link to="/events" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-ieee-blue rounded-full"></span> Events</Link></li>
                            <li><Link to="/team" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-ieee-blue rounded-full"></span> Leadership</Link></li>
                            <li><Link to="/contact" className="hover:text-ieee-blue transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-ieee-blue rounded-full"></span> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Get in Touch
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-ieee-blue"></span>
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 p-1 bg-slate-800 rounded">
                                    <MapPin className="w-4 h-4 text-ieee-blue" />
                                </div>
                                <span>123 University Avenue,<br />Engineering Block B, Room 404,<br />Tech City, USA 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-1 bg-slate-800 rounded">
                                    <Phone className="w-4 h-4 text-ieee-blue" />
                                </div>
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-1 bg-slate-800 rounded">
                                    <Mail className="w-4 h-4 text-ieee-blue" />
                                </div>
                                <a href="mailto:contact@ieeesb.org" className="hover:text-white transition-colors">contact@ieeesb.org</a>
                            </li>
                        </ul>
                    </div>

                     {/* Column 4: Newsletter */}
                     <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Stay Updated
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-ieee-blue"></span>
                        </h3>
                        <p className="text-sm mb-4 text-slate-400">Subscribe to our newsletter for the latest event updates and tech news.</p>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-ieee-blue focus:ring-1 focus:ring-ieee-blue transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-ieee-blue hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                                Subscribe <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 text-center md:text-left">
                        &copy; {new Date().getFullYear()} IEEE Student Branch. All rights reserved. <br className="md:hidden"/> Designed with <Heart className="w-3 h-3 inline text-red-500 mx-1" /> by Web Team.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                     <button 
                        onClick={scrollToTop} 
                        className="p-2 bg-slate-800 text-slate-400 rounded-lg hover:bg-ieee-blue hover:text-white transition-all transform hover:-translate-y-1"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
