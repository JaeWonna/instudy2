import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                            <Navbar.Brand href="/">InStudy</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                            <Button variant="light">로그아웃</Button>{' '}
                        </Navbar>
                    )
            : (
                        // <Container>
                            <Row>
                        <Navbar bg="dark" variant="dark">
                            <Col>
                            <Navbar.Brand href="/">InStudy</Navbar.Brand>
                            </Col>
                            <Nav className="me-auto">
                                    <Button variant="light" onClick={onClickLogin}>로그인</Button>
                                    <Button variant="light" onClick={onClickSignUp}>회원가입</Button>
                            </Nav>
                        </Navbar>
                            </Row>
                        // </Container>

            //     <div className="EditorNav" className="EditorNav">
            //     <container>
            //     <Row xs="5" className="marginTop">
            //     <Col>
            //     <a href="/"></a>
            //     </Col>
            //     <Col>
            // {/*Button list*/}
            //     <Button variant="outline-success"  style={{position: 'absolute', right: 0, marginRight: "30px"}}className="buttonMargin">로그인</Button>{' '}
            //     <Button variant="outline-success" className="buttonMargin">회원가입</Button>{' '}
            //     </Col>
            //     </Row>
            //     </container>
            //     </div>

                    )
            }
        </>
    );
}

export default Header;

