import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Header from './Header';

const Header = (props) => {

    console.log(props.menu);
    return (
        <>
        <Container>
                       <div className="TextBox">
                        <div>헤더 올 자리</div>
                       <Routes>
                       <Route path="/group" exact render={() => <div>메인</div>}/>
            <Route path="/group" exact render={() => <div>스터디 그룹</div>}/>
            <Route path="/profile" exact render={() => <div>프로필</div>}/>
            </Routes>
           </div>
           <hr/>
           </Container>
        </>
    );
};

export default Header;

