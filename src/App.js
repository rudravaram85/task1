import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Dashboard from './components/Dashboard';
import JobList  from './components/JobList';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
       <Dashboard />
       <main>  <br/>
              <JobList />
       </main>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
