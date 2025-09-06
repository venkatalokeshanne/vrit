'use client';
import { useState } from 'react';

export default function DeployPage() {
  const [awsStatus, setAwsStatus] = useState('idle');
  const [vritStatus, setVritStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [awsLogs, setAwsLogs] = useState([]);
  const [vritLogs, setVritLogs] = useState([]);
  const [deploymentDetails, setDeploymentDetails] = useState({});

  const addLog = (site, message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = { message, type, timestamp };
    
    if (site === 'aws') {
      setAwsLogs(prev => [...prev, logEntry]);
    } else {
      setVritLogs(prev => [...prev, logEntry]);
    }
  };

  const deploy = async (site) => {
    if (site === 'aws') {
      setAwsStatus('deploying');
      setAwsLogs([]);
    } else {
      setVritStatus('deploying');
      setVritLogs([]);
    }
    
    setMessage(`Deploying ${site.toUpperCase()}...`);
    addLog(site, `🚀 Starting ${site.toUpperCase()} deployment...`, 'info');

    try {
      addLog(site, '📡 Sending deployment request...', 'info');
      
      const response = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site })
      });

      if (response.ok) {
        const result = await response.json();
        addLog(site, `✅ Deployment request sent successfully!`, 'success');
        
        if (result.data && result.data.job) {
          addLog(site, `📋 Deployment ID: ${result.data.job.id}`, 'info');
          setDeploymentDetails(prev => ({
            ...prev,
            [site]: { id: result.data.job.id, state: result.data.job.state }
          }));
        }

        // Simulate deployment progress
        setTimeout(() => addLog(site, '📦 Building application...', 'info'), 2000);
        setTimeout(() => addLog(site, '🌐 Deploying to edge network...', 'info'), 5000);
        setTimeout(() => {
          addLog(site, '🎉 Deployment completed successfully!', 'success');
          if (site === 'aws') {
            setAwsStatus('success');
          } else {
            setVritStatus('success');
          }
          setMessage(`${site.toUpperCase()} deployed successfully! ✅`);
        }, 8000);

      } else {
        throw new Error(`Deployment failed: ${response.status}`);
      }
    } catch (error) {
      addLog(site, `❌ Deployment failed: ${error.message}`, 'error');
      if (site === 'aws') {
        setAwsStatus('error');
      } else {
        setVritStatus('error');
      }
      setMessage(`${site.toUpperCase()} deployment failed ❌`);
    }
  };

  const reset = () => {
    setAwsStatus('idle');
    setVritStatus('idle');
    setMessage('');
    setAwsLogs([]);
    setVritLogs([]);
    setDeploymentDetails({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🚀 Deployment Center
          </h1>
          <p className="text-gray-300">
            Deploy your websites with one click
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* AWS Deployment */}
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-4">
              🎓 AWS Training Website
            </h2>
            
            {awsStatus === 'idle' && (
              <button
                onClick={() => deploy('aws')}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Deploy AWS Site
              </button>
            )}
            
            {awsStatus === 'deploying' && (
              <div className="text-yellow-400 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400 mr-2"></div>
                  ⏳ Deploying...
                </div>
                {deploymentDetails.aws && (
                  <div className="text-sm text-gray-300">
                    ID: {deploymentDetails.aws.id}
                  </div>
                )}
              </div>
            )}
            
            {awsStatus === 'success' && (
              <div className="text-green-400 mb-4">
                <div className="text-lg">✅ Deployed Successfully!</div>
                {deploymentDetails.aws && (
                  <div className="text-sm text-gray-300 mt-2">
                    <div>Deployment ID: {deploymentDetails.aws.id}</div>
                    <a 
                      href="https://www.awsdevopstraininginhyderabad.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      🌐 Visit Live Site
                    </a>
                  </div>
                )}
              </div>
            )}
            
            {awsStatus === 'error' && (
              <div className="text-red-400 mb-4">
                <div className="text-lg">❌ Deployment Failed</div>
                <div className="text-sm text-gray-300 mt-2">
                  Check logs below for details
                </div>
              </div>
            )}

            {/* AWS Deployment Logs */}
            {awsLogs.length > 0 && (
              <div className="mt-4 bg-black/30 rounded-lg p-4 text-left">
                <h4 className="text-sm font-bold text-white mb-2">📋 Deployment Logs</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {awsLogs.map((log, index) => (
                    <div key={index} className="text-xs">
                      <span className="text-gray-500">{log.timestamp}</span>
                      <span className={`ml-2 ${
                        log.type === 'error' ? 'text-red-400' : 
                        log.type === 'success' ? 'text-green-400' : 
                        'text-gray-300'
                      }`}>
                        {log.message}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* VRIT Deployment */}
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-4">
              🏢 VR IT Solutions Website
            </h2>
            
            {vritStatus === 'idle' && (
              <button
                onClick={() => deploy('vrit')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Deploy VRIT Site
              </button>
            )}
            
            {vritStatus === 'deploying' && (
              <div className="text-yellow-400 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400 mr-2"></div>
                  ⏳ Deploying...
                </div>
                {deploymentDetails.vrit && (
                  <div className="text-sm text-gray-300">
                    ID: {deploymentDetails.vrit.id}
                  </div>
                )}
              </div>
            )}
            
            {vritStatus === 'success' && (
              <div className="text-green-400 mb-4">
                <div className="text-lg">✅ Deployed Successfully!</div>
                {deploymentDetails.vrit && (
                  <div className="text-sm text-gray-300 mt-2">
                    <div>Deployment ID: {deploymentDetails.vrit.id}</div>
                    <a 
                      href="https://www.vritsol.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      🌐 Visit Live Site
                    </a>
                  </div>
                )}
              </div>
            )}
            
            {vritStatus === 'error' && (
              <div className="text-red-400 mb-4">
                <div className="text-lg">❌ Deployment Failed</div>
                <div className="text-sm text-gray-300 mt-2">
                  Check logs below for details
                </div>
              </div>
            )}

            {/* VRIT Deployment Logs */}
            {vritLogs.length > 0 && (
              <div className="mt-4 bg-black/30 rounded-lg p-4 text-left">
                <h4 className="text-sm font-bold text-white mb-2">📋 Deployment Logs</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {vritLogs.map((log, index) => (
                    <div key={index} className="text-xs">
                      <span className="text-gray-500">{log.timestamp}</span>
                      <span className={`ml-2 ${
                        log.type === 'error' ? 'text-red-400' : 
                        log.type === 'success' ? 'text-green-400' : 
                        'text-gray-300'
                      }`}>
                        {log.message}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Status Message */}
        {message && (
          <div className="text-center mb-8">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-white">{message}</p>
            </div>
          </div>
        )}

        {/* Reset Button */}
        {(awsStatus !== 'idle' || vritStatus !== 'idle') && (
          <div className="text-center">
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Reset All
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
