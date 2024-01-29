// src/App.js
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './Components/Home';
import './App.css'
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Container } from 'react-bootstrap';
function App() {
 
  return (
    <>
    <Header />
    <HomeComponent />
    <Footer /> 
    </>
  );
}

export default App;
