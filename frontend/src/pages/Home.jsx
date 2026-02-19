import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Award, Handshake } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { chapters } from '../data/chapters';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [counts, setCounts] = useState({ events: 0, members: 0, workshops: 0, collaborations: 0 });

  useEffect(() => {
    const targets = { events: 50, members: 200, workshops: 30, collaborations: 15 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let current = { events: 0, members: 0, workshops: 0, collaborations: 0 };
    const increment = {
      events: targets.events / steps,
      members: targets.members / steps,
      workshops: targets.workshops / steps,
      collaborations: targets.collaborations / steps
    };

    const timer = setInterval(() => {
      current = {
        events: Math.min(current.events + increment.events, targets.events),
        members: Math.min(current.members + increment.members, targets.members),
        workshops: Math.min(current.workshops + increment.workshops, targets.workshops),
        collaborations: Math.min(current.collaborations + increment.collaborations, targets.collaborations)
      };

      setCounts({
        events: Math.floor(current.events),
        members: Math.floor(current.members),
        workshops: Math.floor(current.workshops),
        collaborations: Math.floor(current.collaborations)
      });

      if (current.events >= targets.events) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              IEEE Student Branch
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Empowering students through technology, innovation, and professional development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chapters">
                <Button variant="primary" className="flex items-center space-x-2">
                  <span>Explore Chapters</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary">Join IEEE</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About IEEE */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">About IEEE</h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
              </p>
              <p className="text-gray-700 mb-4">
                Our student branch provides opportunities for students to enhance their technical knowledge, develop professional skills, and network with industry leaders.
              </p>
              <p className="text-gray-700">
                Through workshops, seminars, competitions, and collaborative projects, we foster innovation and prepare students for successful careers in technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Why Join IEEE?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Access to cutting-edge research and publications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Networking opportunities with professionals worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Career development resources and mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Participation in technical competitions and conferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Chapters</h2>
            <p className="text-gray-600">Explore our technical societies and special interest groups</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter) => (
              <Card key={chapter.id} hover className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{chapter.shortName}</span>
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">{chapter.shortName}</h3>
                <p className="text-sm text-gray-600 mb-4">{chapter.description.substring(0, 80)}...</p>
                <Link to={`/chapters/${chapter.id}`}>
                  <Button variant="outline" className="text-sm w-full">View Details</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <div className="text-4xl font-bold mb-2">{counts.events}+</div>
              <div className="text-blue-200">Events Conducted</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <div className="text-4xl font-bold mb-2">{counts.members}+</div>
              <div className="text-blue-200">Active Members</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <div className="text-4xl font-bold mb-2">{counts.workshops}+</div>
              <div className="text-blue-200">Workshops</div>
            </div>
            <div className="text-center">
              <Handshake className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <div className="text-4xl font-bold mb-2">{counts.collaborations}+</div>
              <div className="text-blue-200">Collaborations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for latest updates and events</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-600"
              required
            />
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};
