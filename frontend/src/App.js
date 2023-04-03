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
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from "axios";
import SignIn from "./containers/sign/sign_in/SignIn";
import SignUp from "./containers/sign/sign_up/SignUp";
import HomeLayout from "./components/common/layouts/HomeLayout";
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Task from "./pages/Task";
import StudyTime from "./pages/StudyTime";
import Todo from "./pages/Todo";
import Calendar from "./pages/Calendar";
import Feed from "./pages/Feed";
import Rank from "./pages/Rank";
import Group from "./pages/Group"
import Profile from "./pages/Profile"
import BottomNav from './BottomNav';
import { Outlet } from 'react-router-dom';
import GroupMainView from './components/group/GroupMainView';
import ProfileGroup from './components/Profile/ProfileGroup';

function App() {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
      const menudata = [
        {id: 1, content: '스터디 그룹'},
        {id: 2, content: '프로필'},
      ];

      setMenu([...menudata]);
    }, []);

  return (
      <>
          <Container fluid>
              <Header title="스터디 그룹"/>
              <Container>
                  <Routes>
                      <Route path="/" element={<HomeLayout />}>

                      </Route>
                      <Route path="/signIn/:id" element={<SignIn />}>

                      </Route>
                      <Route path="/signUp" element={<SignUp />}>

                      </Route>
                      {/*<Route path="/signInv2" element={<SignIn>}*/}
                      <Route path="/task" element={<Task />}>
                      </Route>
                      <Route path="/todo" element={<Todo />}>
                      </Route>
                      <Route path="/calendar" element={<Calendar />}>
                      </Route>
                      <Route path="/studytime" element={<StudyTime />}>
                      </Route>
                      <Route path="/feed" element={<Feed />}>
                      </Route>
                      <Route path="/rank" element={<Rank />}>
                      </Route>
                      <Route path="/group" element={<Group />}>
                      </Route>
                      <Route path="/profile" element={<Profile />}>
                      </Route>
                      <Route path="/bottomNav" element={<BottomNav />}></Route>
                      <Route path="/GroupMainView" element={<GroupMainView />}></Route>
                      <Route path="ProfileGroup" element={<ProfileGroup />}></Route>

                  </Routes>
                  </Container>

                  <Outlet />
          </Container>
      </>

  );
}

export default App;
