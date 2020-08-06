import React from 'react';
import logo from './logo.svg';
import './App.css';
import EditStudent from './components/EditStudent';
import ListStudent from './components/ListStudents';

function App() {
	return (
		<div className="App">
			{/* <EditStudent /> */}
      <h1>w63 Fetch students from Firebase to table</h1>
      <ListStudent />
		</div>
	);
}

export default App;
