import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Header from './Header';

const Header = (props) => {

    const MainHeader = () => {
        return (
            <>
            <div>메인 페이지</div>
            </>
        );
    };

    const GroupHeader = () => {
        return (
            <>
            <div>그룹 페이지</div>
            </>
        );
    };

    const ProfileHeader = () => {
        return (
            <>
            <div>프로필 페이지</div>
            </>
        );
    };

    console.log(props.menu);
    return (
        <>
        <Container>
                       <div className="TextBox">
                        <div>
                        <Routes>
                       <Route path="/" element={<MainHeader/>}/>
            <Route path="/group" element={<GroupHeader/>}/>
            <Route path="/profile" element={<ProfileHeader/>}/>
            </Routes>
                        </div>
           </div>
           <hr/>
           </Container>
        </>
    );
};

export default Header;

