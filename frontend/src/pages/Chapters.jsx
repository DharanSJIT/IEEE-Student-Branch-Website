import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { chapters } from '../data/chapters';
import { motion } from 'framer-motion';

export const Chapters = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">IEEE Chapters</h1>
          <p className="text-blue-200 text-lg">Explore our technical societies and their activities</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-600">{chapter.shortName}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">{chapter.name}</h2>
                    <p className="text-sm text-gray-600">{chapter.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Domain Focus:</h3>
                  <p className="text-sm text-gray-700">{chapter.domain}</p>
                </div>
                <Link to={`/chapters/${chapter.id}`}>
                  <Button variant="primary" className="w-full">View Chapter Details</Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
