import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './pages/Login';
import List from './pages/List';
import Addstudent from './pages/Addstudent';
import Home from './pages/Home';
import Index from './pages/Index';
import Profile from './pages/Profile';



import axios from 'axios';

axios.defaults.baseURL ="http://localhost:8000/" ;

axios.defaults.headers.post['Content-type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
<Routes>
<Route  path="/" element={<Home/>} />
<Route  path="/Index" element={<Index/>} />
<Route  path="/login" element={<Login/>} />
<Route  path="/list" element={<List/>} />
<Route  path="/list/addstudent" element={<Addstudent/>} />
<Route  path="/profile" element={<Profile/>} />

</Routes>
    </Router>
  );
}

export default App;
