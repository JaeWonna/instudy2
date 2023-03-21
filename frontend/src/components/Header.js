import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header(props){
    const [isLogin, setIsLogin] = useState(false);

    // useEffect(()=> {
    //     let cookie = getCookie('쿠키 이름');
    //     console.log(cookie);
    //     if(cookie){
    //         setIsLogin(true);
    //     }
    //     else{
    //         setIsLogin(false);
    //     }
    // })

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate(`/signIn/id`);
    };

    const onClickSignUp = () => {
        navigate(`/signUp`);
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
                            <Button variant="light" onClick={onClickLogin}>로그인</Button>{' '}
                                <Button variant="light" onClick={onClickSignUp}>회원가입</Button>{' '}
                            </Nav>
                        </Navbar>
                    )
            }
        </>
    );
}

export default Header;

