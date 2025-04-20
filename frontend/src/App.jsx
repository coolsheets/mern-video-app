// filepath: /home/mfretwell/Documents/InceptionU/projects/mern-video-app/frontend/src/App.jsx
import React, { useState } from 'react';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import VideoList from './components/VideoList.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <h1>Welcome to the MERN Video App</h1>
      {!user ? (
        showRegister ? (
          <Register onRegister={() => setShowRegister(false)} />
        ) : (
          <Login onLogin={handleLogin} />
        )
      ) : (
        <div>
          <p>Welcome, {user.username}!</p>
          <VideoList />
        </div>
      )}
      {!user && (
        <button onClick={() => setShowRegister(!showRegister)}>
          {showRegister ? 'Back to Login' : 'Register'}
        </button>
      )}
    </div>
  );
};

export default App;