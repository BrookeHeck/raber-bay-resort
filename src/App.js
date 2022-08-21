import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cabins from './components/Cabins';
import Contact from './components/Contact';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <>
      <Router>
        <Header/>
        <Routes>
          <Route 
            exact path="/home" 
            element={<Home/>}>
          </Route>
          <Route 
            path="/cabins" 
            element={<Cabins/>}>
          </Route>
          <Route 
            path="/contact" 
            element={<Contact/>}>
          </Route>
        </Routes>
        <Footer/>  
      </Router>
      </>
    );
  }
}

export default App;
