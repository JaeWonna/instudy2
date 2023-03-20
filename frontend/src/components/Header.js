import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header(){
    const [isLogin, setIsLogin] = useState(false);

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate(`/each/signIn`);
    };

    return (
        <>
            {
                isLogin == true
                    ? (
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">InStudy</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                            <Button variant="light">로그아웃</Button>{' '}
                        </Navbar>
                    )
            : (
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="/">InStudy</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/task" style={{ textDecoration: 'none' }}>과제</Link></Nav.Link>
                                <Nav.Link><Link to="/todo" style={{ textDecoration: 'none' }}>Todo</Link></Nav.Link>
                                <Nav.Link><Link to="/calendar" style={{ textDecoration: 'none' }}>캘린더</Link></Nav.Link>
                                <Nav.Link><Link to="/studytime" style={{ textDecoration: 'none' }}>공부시간</Link></Nav.Link>
                                <Nav.Link><Link to="/feed" style={{ textDecoration: 'none' }}>피드</Link></Nav.Link>
                                <Nav.Link><Link to="/rank" style={{ textDecoration: 'none' }}>랭킹</Link></Nav.Link>
                            <Button variant="light" onClick={onClickLogin}>로그인</Button>{' '}
                            </Nav>
                        </Navbar>
                    )
            }
        </>
    );
}

export default Header;

