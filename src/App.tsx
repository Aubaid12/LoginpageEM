import { useState } from 'react';
import { LoginForm } from '@/features/auth/LoginForm';
import { JoinForm } from '@/features/auth/JoinForm';
import './App.css';

function App() {
  const [view, setView] = useState<'login' | 'join'>('login');

  return (
    <main className="app-container">
      <div className="background-glow" />
      {view === 'login' ? (
        <LoginForm onJoinClick={() => setView('join')} />
      ) : (
        <JoinForm onLoginClick={() => setView('login')} />
      )}
    </main>
  );
}

export default App;
