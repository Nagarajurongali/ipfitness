import React from 'react'
import Login from './Components/Login'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import LoginNew from './Components/LoginNew';
import Addclient from './Pages/Addclient';
import Notfound from './Pages/Notfound';
import ViewClient from './Pages/ViewClient';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/*' element={<Notfound />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/new' element={<LoginNew />} />
          <Route path='/addclient' element={<Addclient />} />
          <Route path='/viewclient' element={<ViewClient />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App