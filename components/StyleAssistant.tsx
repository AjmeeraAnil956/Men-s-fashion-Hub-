
import React, { useState } from 'react';
import { getStyleAdvice } from '../services/geminiService';

const StyleAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [advice, setAdvice] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Please enter a style question.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setAdvice('');

    try {
      const result = await getStyleAdvice(prompt);
      setAdvice(result);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const formattedAdvice = advice.split('\n').map((line, index) => (
    <p key={index} className="mb-2">{line}</p>
  ));

  return (
    <section id="assistant" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            AI Fashion <span className="text-indigo-400">Assistant</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Get instant, personalized style advice. Ask anything from "What should I wear to a wedding?" to "How do I match a tie with my shirt?".
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., What to wear for a casual first date?"
                className="flex-grow bg-gray-700 text-white rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-md hover:bg-indigo-500 transition-colors duration-300 disabled:bg-indigo-800 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Getting Advice...
                  </>
                ) : (
                  'Get Advice'
                )}
              </button>
            </div>
          </form>

          {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
          
          {advice && (
            <div className="mt-8 p-6 bg-gray-700/50 rounded-md border border-gray-600">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">Style Recommendation:</h3>
              <div className="text-gray-300 space-y-2 prose prose-invert max-w-none">
                {formattedAdvice}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StyleAssistant;
