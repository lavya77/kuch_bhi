import { useState } from 'react'
import Home from './pages/Home.jsx'
import Website from './pages/website.jsx'
import Editor from './pages/Editor.jsx' 
import PublishControl from './pages/PublishControl.jsx'

function App() {
  const [view, setView] = useState('home');
  const [projectData, setProjectData] = useState({ domain: 'shaslolav.agency' });

  return (
    <>
      {view === 'home' && (
        <Home onLaunch={() => setView('create')} />
      )}

      {view === 'create' && (
        <Website 
          onBack={() => setView('home')} 
          onDeploySuccess={(data) => {
            if(data) setProjectData(data);
            setView('editor');
          }} 
        />
      )}
      
      {view === 'editor' && (
        <Editor 
          onExit={() => setView('home')} 
          onPublish={() => {
            console.log("NAVIGATING TO PUBLISH..."); // Check if this shows in Console
            setView('publish');
          }} 
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