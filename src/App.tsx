import React, { useState } from 'react';
import { Book, Menu, X, Search, BookOpen, FileText, HelpCircle, Home, ChevronRight } from 'lucide-react';
import HomePage from './components/HomePage';
import UnitContent from './components/UnitContent';
import ExamPrep from './components/ExamPrep';
import QuizSection from './components/QuizSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'unit1', label: 'Unit I: Web Technology', icon: BookOpen },
    { id: 'unit2', label: 'Unit II: Markup Languages', icon: FileText },
    { id: 'unit3', label: 'Unit III: CSS', icon: Book },
    { id: 'exam-prep', label: 'Exam Preparation', icon: HelpCircle },
    { id: 'quiz', label: 'Practice Quiz', icon: FileText }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={setActiveSection} />;
      case 'unit1':
      case 'unit2':
      case 'unit3':
        return <UnitContent unit={activeSection} />;
      case 'exam-prep':
        return <ExamPrep />;
      case 'quiz':
        return <QuizSection />;
      default:
        return <HomePage onNavigate={setActiveSection} />;
    }
  };

  const currentMenuItem = menuItems.find(item => item.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Web Technology E-Book</h1>
                <p className="text-sm text-gray-600">Complete Study Guide & Exam Prep</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none lg:border-r border-gray-200`}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <nav className="flex-1 px-4 py-6 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto text-blue-600" />}
                  </button>
                );
              })}
            </nav>
            
            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Comprehensive Web Technology Guide
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-6xl mx-auto p-6">
            {/* Breadcrumb */}
            {activeSection !== 'home' && (
              <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <button
                  onClick={() => setActiveSection('home')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 font-medium">{currentMenuItem?.label}</span>
              </nav>
            )}
            
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;