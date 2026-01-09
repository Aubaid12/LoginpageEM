import { LoginForm } from '@/features/auth/LoginForm';
import './App.css'; // We'll keep a minimal App css or just inline/module

function App() {
  return (
    <main className="app-container">
      <div className="background-glow" />
      <LoginForm />
    </main>
  );
}

export default App;
