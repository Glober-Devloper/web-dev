import React from 'react';
import { BookOpen, FileText, HelpCircle, Trophy, Clock, Target, ChevronRight, Book } from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const units = [
    {
      id: 'unit1',
      title: 'Unit I: Introduction to Web Technology',
      duration: '15 Hours',
      topics: 25,
      description: 'Learn about Internet, WWW, Web protocols, browsers, and servers',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      id: 'unit2',
      title: 'Unit II: Introduction to Markup Languages',
      duration: '20 Hours',
      topics: 35,
      description: 'Master HTML, Tables, Frames, Forms, and markup fundamentals',
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      id: 'unit3',
      title: 'Unit III: Cascading Style Sheet',
      duration: '10 Hours',
      topics: 20,
      description: 'Complete CSS guide with properties, selectors, and styling',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Notes',
      description: 'Detailed explanations with simple and complex examples',
      color: 'text-blue-600'
    },
    {
      icon: FileText,
      title: 'Practice Questions',
      description: '100+ MCQs and exam questions with detailed solutions',
      color: 'text-green-600'
    },
    {
      icon: Target,
      title: 'Interactive Learning',
      description: 'Code examples and live demonstrations',
      color: 'text-purple-600'
    },
    {
      icon: Trophy,
      title: 'Exam Ready',
      description: 'Complete syllabus coverage for exam preparation',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl p-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Master Web Technology with Complete Study Guide
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Comprehensive notes, examples, and exam preparation for your Web Technology course. 
            Learn at your own pace with detailed explanations and practical examples.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('unit1')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Learning
            </button>
            <button
              onClick={() => onNavigate('exam-prep')}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Practice Questions
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Units */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer group"
              onClick={() => onNavigate(unit.id)}
            >
              <div className={`h-2 ${unit.color}`} />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${unit.lightColor} flex items-center justify-center mb-4`}>
                  <Book className={`w-6 h-6 ${unit.textColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {unit.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{unit.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {unit.duration}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <FileText className="w-4 h-4 mr-1" />
                      {unit.topics} topics
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('exam-prep')}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
          >
            <div>
              <h3 className="font-semibold text-gray-900">Exam Preparation</h3>
              <p className="text-sm text-gray-600">100+ practice questions with solutions</p>
            </div>
            <HelpCircle className="w-5 h-5 text-blue-600" />
          </button>
          <button
            onClick={() => onNavigate('quiz')}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
          >
            <div>
              <h3 className="font-semibold text-gray-900">Practice Quiz</h3>
              <p className="text-sm text-gray-600">Test your knowledge with interactive quizzes</p>
            </div>
            <Trophy className="w-5 h-5 text-green-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;