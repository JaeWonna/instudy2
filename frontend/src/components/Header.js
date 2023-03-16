import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
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
                            <Navbar.Brand href="#home">InStudy</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                            <Button variant="light" onClick={onClickLogin}>로그인</Button>{' '}
                        </Navbar>
                    )
            }
        </>
    );
}

export default Header;

