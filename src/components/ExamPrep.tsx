import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RefreshCw, BookOpen, Target } from 'lucide-react';
import { examQuestions } from '../data/examQuestions';

const ExamPrep: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [showAnswers, setShowAnswers] = useState<{ [key: string]: boolean }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const units = [
    { id: 'all', name: 'All Units' },
    { id: 'unit1', name: 'Unit I: Web Technology' },
    { id: 'unit2', name: 'Unit II: Markup Languages' },
    { id: 'unit3', name: 'Unit III: CSS' }
  ];

  const filteredQuestions = selectedUnit === 'all' 
    ? examQuestions 
    : examQuestions.filter(q => q.unit === selectedUnit);

  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = filteredQuestions.slice(startIndex, startIndex + questionsPerPage);

  const toggleAnswer = (questionId: string) => {
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const resetAnswers = () => {
    setShowAnswers({});
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Exam Preparation</h1>
        <p className="text-blue-100">
          Practice with 100+ carefully crafted questions covering all syllabus topics
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{examQuestions.length}</p>
              <p className="text-sm text-gray-600">Total Questions</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-600">Units Covered</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{filteredQuestions.length}</p>
              <p className="text-sm text-gray-600">Current Filter</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Filter by Unit:</label>
            <select
              value={selectedUnit}
              onChange={(e) => {
                setSelectedUnit(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {units.map(unit => (
                <option key={unit.id} value={unit.id}>{unit.name}</option>
              ))}
            </select>
          </div>
          
          <button
            onClick={resetAnswers}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset Answers</span>
          </button>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {currentQuestions.map((question, index) => (
          <div key={question.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                {startIndex + index + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {question.unit.toUpperCase().replace('UNIT', 'Unit ')}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    question.difficulty === 'easy' ? 'text-green-600 bg-green-100' :
                    question.difficulty === 'medium' ? 'text-orange-600 bg-orange-100' :
                    'text-red-600 bg-red-100'
                  }`}>
                    {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{question.question}</h3>
                
                {question.type === 'mcq' && question.options && (
                  <div className="space-y-2 mb-4">
                    {question.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50">
                        <span className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                        <span className="text-gray-700">{option}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <button
                  onClick={() => toggleAnswer(question.id)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors mb-4"
                >
                  {showAnswers[question.id] ? (
                    <>
                      <XCircle className="w-4 h-4" />
                      <span>Hide Answer</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Show Answer</span>
                    </>
                  )}
                </button>
                
                {showAnswers[question.id] && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-800">Answer</h4>
                    </div>
                    <p className="text-green-800 mb-3 font-medium">{question.answer}</p>
                    {question.explanation && (
                      <div>
                        <h5 className="font-semibold text-green-800 mb-1">Explanation:</h5>
                        <p className="text-green-700 text-sm leading-relaxed">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(startIndex + questionsPerPage, filteredQuestions.length)} of {filteredQuestions.length} questions
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPrep;