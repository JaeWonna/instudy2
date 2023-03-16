/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from "./containers/sign/sign_in/SignIn";
import SignUp from "./containers/sign/sign_up/SignUp";
import HomeLayout from "./components/common/layouts/HomeLayout";
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";

function App() {

  return (
      <>
          <Container fluid>
              <Header />
                  <Routes>
                      <Route path="/" element={<HomeLayout />}>

                      </Route>
                      <Route path="/each/signIn" element={<SignIn />}>

                      </Route>
                      <Route path="/each/signUp" element={<SignUp />}>

                      </Route>

                  </Routes>
          </Container>
      </>

  );
}

export default App;
