import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { chapters } from '../data/chapters';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';

export const ChapterDetail = () => {
  const { id } = useParams();
  const chapter = chapters.find(c => c.id === id);

  if (!chapter) {
    return <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Chapter not found</h1>
        <Link to="/chapters" className="text-blue-600 hover:underline mt-4 inline-block">Back to Chapters</Link>
      </div>
    </div>;
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-blue-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/chapters" className="text-blue-600 hover:underline">Chapters</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700">{chapter.shortName}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">{chapter.shortName}</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">{chapter.name}</h1>
              <p className="text-blue-200 mt-2">{chapter.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">About {chapter.shortName}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Vision</h3>
              <p className="text-gray-700">{chapter.vision}</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Mission</h3>
              <p className="text-gray-700">{chapter.mission}</p>
            </Card>
          </div>
          <Card className="mt-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Domain Focus</h3>
            <p className="text-gray-700 mb-4">{chapter.domain}</p>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Importance</h3>
            <p className="text-gray-700">{chapter.importance}</p>
          </Card>
        </section>

        {/* Student Representatives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Student Representatives</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {chapter.representatives.map((rep, index) => (
              <Card key={index} hover className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-blue-600">👤</span>
                </div>
                <h3 className="font-semibold text-blue-900 mb-1">{rep.name}</h3>
                <p className="text-sm text-gray-600">{rep.role}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Past Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {chapter.pastActivities.map((activity, index) => (
              <Card key={index} hover>
                <div className="w-full h-48 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{activity.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(activity.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <p className="text-gray-700">{activity.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Activities */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Upcoming Activities</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {chapter.upcomingActivities.map((activity, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <Card>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{activity.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(activity.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <p className="text-gray-700">{activity.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
