import { useState } from 'react'
import Home from './pages/Home.jsx'
import Website from './pages/website.jsx'
import Editor from './pages/Editor.jsx' 
import PublishControl from './pages/PublishControl.jsx'

function App() {
  const [view, setView] = useState('home');
  
  // 1. You need this state to store the domain name from the Website page
  const [projectData, setProjectData] = useState({ domain: 'yourdomain.com' });

  return (
    <>
      {view === 'home' && (
        <Home onLaunch={() => setView('create')} />
      )}

      {view === 'create' && (
        <Website 
          onBack={() => setView('home')} 
          // 2. Capture the domain when deployment finishes
          onDeploySuccess={(data) => {
            setProjectData(data || { domain: 'myspace.zerospace.com' });
            setView('editor');
          }} 
        />
      )}
      
      {view === 'editor' && (
        <Editor 
          onExit={() => setView('home')} 
          // 3. THIS WAS MISSING: You must pass onPublish here!
          onPublish={() => setView('publish')} 
        />
      )}

      {view === 'publish' && (
        <PublishControl 
          domainName={projectData.domain}
          onBack={() => setView('editor')} 
        />
      )}
    </>
  )
}

export default App;