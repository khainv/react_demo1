import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Login } from './pages/Acount';
import { PrivateRoute } from './components';

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Switch>
          <PrivateRoute>
            <Login></Login>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
