import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import home from './pages/home.js';
import welcome from './pages/welcome.js';
import forgot from './pages/forgot.js';
import signup from './pages/signup.js';
import schedule from './pages/schedule.js';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/'  element={<home />} />
		<Route path='/welcome' element={<welcome/>} />
		<Route path='/forgot' element={<forgot/>} />
		<Route path='/signup' element={<signup/>} />
		<Route path='/schedule' element={<schedule/>} />
	</Routes>
	</Router>
);
}

export default App;

