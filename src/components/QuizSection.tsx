import React, { useState } from 'react';
import { Play, RotateCcw, Trophy, Clock, CheckCircle, XCircle } from 'lucide-react';
import { examQuestions } from '../data/examQuestions';

const QuizSection: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes
  const [selectedUnit, setSelectedUnit] = useState('all');

  const units = [
    { id: 'all', name: 'All Units' },
    { id: 'unit1', name: 'Unit I: Web Technology' },
    { id: 'unit2', name: 'Unit II: Markup Languages' },
    { id: 'unit3', name: 'Unit III: CSS' }
  ];

  const getQuizQuestions = () => {
    const filtered = selectedUnit === 'all' 
      ? examQuestions.filter(q => q.type === 'mcq')
      : examQuestions.filter(q => q.unit === selectedUnit && q.type === 'mcq');
    
    // Shuffle and take first 10
    return filtered.sort(() => Math.random() - 0.5).slice(0, 10);
  };

  const [quizQuestions, setQuizQuestions] = useState(getQuizQuestions());

  const startQuiz = () => {
    setQuizQuestions(getQuizQuestions());
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeRemaining(600);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeRemaining(600);
  };

  const selectAnswer = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Timer effect
  React.useEffect(() => {
    if (quizStarted && !showResults && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !showResults) {
      setShowResults(true);
    }
  }, [quizStarted, showResults, timeRemaining]);

  if (!quizStarted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <Trophy className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Practice Quiz</h1>
          <p className="text-purple-100">
            Test your knowledge with 10 random multiple choice questions
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quiz Settings</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Unit:
            </label>
            <select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {units.map(unit => (
                <option key={unit.id} value={unit.id}>{unit.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">Questions</div>
              <div className="text-gray-600">10 MCQs</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">Time Limit</div>
              <div className="text-gray-600">10 minutes</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">Difficulty</div>
              <div className="text-gray-600">Mixed</div>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mx-auto"
          >
            <Play className="w-5 h-5" />
            <span>Start Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <Trophy className={`w-16 h-16 mx-auto mb-4 ${
            percentage >= 80 ? 'text-green-500' : 
            percentage >= 60 ? 'text-orange-500' : 'text-red-500'
          }`} />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
          <p className="text-gray-600 mb-6">Here are your results:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{score}/{quizQuestions.length}</div>
              <div className="text-sm text-gray-600">Correct Answers</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
              <div className="text-sm text-gray-600">Score</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{formatTime(600 - timeRemaining)}</div>
              <div className="text-sm text-gray-600">Time Taken</div>
            </div>
          </div>

          <div className="flex space-x-4 justify-center">
            <button
              onClick={resetQuiz}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Results</h2>
          <div className="space-y-4">
            {quizQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.answer;
              
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Question {index + 1}: {question.question}
                      </h3>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Your answer:</span>
                          <span className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {userAnswer || 'No answer selected'}
                          </span>
                        </div>
                        {!isCorrect && (
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-600">Correct answer:</span>
                            <span className="font-medium text-green-600">{question.answer}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <div className="flex items-center space-x-2 text-sm font-medium text-blue-600">
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeRemaining)}</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{question.question}</h2>
        
        <div className="space-y-3 mb-6">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(option)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedAnswers[currentQuestion] === option
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                  selectedAnswers[currentQuestion] === option
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={nextQuestion}
            disabled={!selectedAnswers[currentQuestion]}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;