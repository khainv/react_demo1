import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Login } from './pages/Acount';
import { PrivateRoute } from './components';
function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <PrivateRoute>
            <Login></Login>
          </PrivateRoute>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
