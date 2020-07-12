import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar.component';
import "bootstrap/dist/css/bootstrap.min.css";
import ExercisesList from './components/exercises-list.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import EditExercise from './components/edit-exercise.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={ExercisesList}/>
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path="/create" exact component={CreateExercise}/>
        <Route path="/user" exact component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
