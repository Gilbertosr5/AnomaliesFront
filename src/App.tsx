import './App.css';
import { Upload } from './pages/Upload';
import { Dashboard } from './pages/Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
     <Routes>
      <Route path="/" element={<Navigate to="/upload" />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
