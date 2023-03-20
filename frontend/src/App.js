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
import axios from "axios";
import SignIn from "./containers/sign/sign_in/SignIn";
import SignUp from "./containers/sign/sign_up/SignUp";
import HomeLayout from "./components/common/layouts/HomeLayout";
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import Task from "./pages/Task";
import StudyTime from "./pages/StudyTime";
import Todo from "./pages/Todo";
import Calendar from "./pages/Calendar";
import Feed from "./pages/Feed";
import Rank from "./pages/Rank";

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts', // 가짜 api posts (https://jsonplaceholder.typicode.com/posts)
        }).then(response => setPosts(response.data)) // response에서 가져온 데이터를 setPosts에 넣어준다
    })

  return (
      <>
          {/*데이터 출력*/}
          {/*<ul>*/}
          {/*    {posts.map(post => (*/}
          {/*        <li key={post.id}>{post.title}</li>*/}
          {/*    ))}*/}
          {/*</ul>*/}
          <Container fluid>
              <Header />
                  <Routes>
                      <Route path="/" element={<HomeLayout />}>

                      </Route>
                      <Route path="/each/signIn" element={<SignIn />}>

                      </Route>
                      <Route path="/each/signUp" element={<SignUp />}>

                      </Route>
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

                  </Routes>
          </Container>
      </>

  );
}

export default App;
