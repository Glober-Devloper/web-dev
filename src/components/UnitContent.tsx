import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Code, BookOpen, Lightbulb, AlertCircle } from 'lucide-react';
import { unitData } from '../data/unitData';

interface UnitContentProps {
  unit: string;
}

const UnitContent: React.FC<UnitContentProps> = ({ unit }) => {
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('content');

  const data = unitData[unit as keyof typeof unitData];

  if (!data) {
    return <div>Unit not found</div>;
  }

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const CodeBlock = ({ code, language = 'html' }: { code: string; language?: string }) => (
    <div className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{language.toUpperCase()}</span>
        <Code className="w-4 h-4 text-gray-400" />
      </div>
      <pre className="text-green-400 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );

  const ExampleBox = ({ title, content, type = 'info' }: { title: string; content: string; type?: 'info' | 'warning' | 'tip' }) => {
    const styles = {
      info: 'bg-blue-50 border-blue-200 text-blue-900',
      warning: 'bg-orange-50 border-orange-200 text-orange-900',
      tip: 'bg-green-50 border-green-200 text-green-900'
    };

    const icons = {
      info: AlertCircle,
      warning: AlertCircle,
      tip: Lightbulb
    };

    const Icon = icons[type];

    return (
      <div className={`border rounded-lg p-4 my-4 ${styles[type]}`}>
        <div className="flex items-center space-x-2 mb-2">
          <Icon className="w-5 h-5" />
          <h4 className="font-semibold">{title}</h4>
        </div>
        <div className="text-sm whitespace-pre-line">{content}</div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h1>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <span>Duration: {data.duration}</span>
          <span>Topics: {data.topics.length}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="border-b border-gray-100">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'content', label: 'Content', icon: BookOpen },
              { id: 'examples', label: 'Examples', icon: Code }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'content' && (
            <div className="space-y-4">
              {data.topics.map((topic) => (
                <div key={topic.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                    {expandedTopics.includes(topic.id) ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedTopics.includes(topic.id) && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <div className="pt-4 space-y-4">
                        <div className="prose prose-sm max-w-none">
                          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                            {topic.content}
                          </div>
                        </div>
                        
                        {topic.examples && topic.examples.map((example, index) => (
                          <div key={index}>
                            <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                            {example.description && (
                              <p className="text-gray-600 mb-3 text-sm">{example.description}</p>
                            )}
                            <CodeBlock code={example.code} language={example.language} />
                          </div>
                        ))}

                        {topic.keyPoints && (
                          <ExampleBox
                            title="Key Points"
                            content={topic.keyPoints.join('\n• ')}
                            type="tip"
                          />
                        )}

                        {topic.importantNotes && (
                          <ExampleBox
                            title="Important Notes"
                            content={topic.importantNotes}
                            type="warning"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-6">
              {data.topics.map((topic) => (
                topic.examples && (
                  <div key={topic.id} className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                      {topic.title}
                    </h3>
                    {topic.examples.map((example, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                        {example.description && (
                          <p className="text-gray-600 mb-3 text-sm">{example.description}</p>
                        )}
                        <CodeBlock code={example.code} language={example.language} />
                      </div>
                    ))}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnitContent;