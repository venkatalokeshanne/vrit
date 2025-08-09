'use client';

import { useEffect, useState } from 'react';

export default function TestChatPage() {
  const [tawkStatus, setTawkStatus] = useState({
    loaded: false,
    apiExists: false,
    functions: {},
    errors: []
  });

  useEffect(() => {
    const checkTawk = () => {
      const status = {
        loaded: false,
        apiExists: false,
        functions: {},
        errors: []
      };

      // Check if Tawk_API exists
      if (typeof window !== 'undefined' && window.Tawk_API) {
        status.apiExists = true;
        
        // Check available functions
        const functionNames = ['showWidget', 'hideWidget', 'toggle', 'maximize', 'minimize', 'setAttributes'];
        functionNames.forEach(funcName => {
          status.functions[funcName] = typeof window.Tawk_API[funcName] === 'function';
        });

        // Check if loaded
        status.loaded = Object.values(status.functions).some(exists => exists);
      }

      setTawkStatus(status);
    };

    // Initial check
    checkTawk();

    // Listen for tawk loaded event
    const handleTawkLoaded = () => {
      console.log('Tawk loaded event received');
      setTimeout(checkTawk, 100);
    };

    window.addEventListener('tawkLoaded', handleTawkLoaded);

    // Periodic checks
    const interval = setInterval(checkTawk, 1000);

    return () => {
      window.removeEventListener('tawkLoaded', handleTawkLoaded);
      clearInterval(interval);
    };
  }, []);

  const testTawkFunction = (functionName) => {
    try {
      if (window.Tawk_API && typeof window.Tawk_API[functionName] === 'function') {
        window.Tawk_API[functionName]();
        console.log(`Successfully called ${functionName}`);
      } else {
        console.error(`Function ${functionName} not available`);
      }
    } catch (error) {
      console.error(`Error calling ${functionName}:`, error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Tawk.to Integration Test</h1>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="mb-2">
                <strong>Tawk_API Exists:</strong> 
                <span className={`ml-2 ${tawkStatus.apiExists ? 'text-green-400' : 'text-red-400'}`}>
                  {tawkStatus.apiExists ? '✓ Yes' : '✗ No'}
                </span>
              </p>
              <p className="mb-2">
                <strong>Fully Loaded:</strong> 
                <span className={`ml-2 ${tawkStatus.loaded ? 'text-green-400' : 'text-red-400'}`}>
                  {tawkStatus.loaded ? '✓ Yes' : '✗ No'}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Available Functions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(tawkStatus.functions).map(([funcName, available]) => (
              <div key={funcName} className="flex items-center justify-between">
                <span>{funcName}:</span>
                <span className={available ? 'text-green-400' : 'text-red-400'}>
                  {available ? '✓' : '✗'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Functions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button
              onClick={() => testTawkFunction('showWidget')}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              disabled={!tawkStatus.functions.showWidget}
            >
              Show Widget
            </button>
            <button
              onClick={() => testTawkFunction('hideWidget')}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              disabled={!tawkStatus.functions.hideWidget}
            >
              Hide Widget
            </button>
            <button
              onClick={() => testTawkFunction('toggle')}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              disabled={!tawkStatus.functions.toggle}
            >
              Toggle
            </button>
            <button
              onClick={() => testTawkFunction('maximize')}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
              disabled={!tawkStatus.functions.maximize}
            >
              Maximize
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Console Output</h2>
          <p className="text-sm text-gray-400">Check browser console (F12) for detailed logs</p>
        </div>
      </div>
    </div>
  );
}
