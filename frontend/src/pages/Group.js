import React, { useState, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import HorizonLine from "../utils/HorizontalLine";

const Group = () => {
    const [group, setGroup] = useState([]);

    useEffect(()=> {
        const groupdata = [
            {id: 1, content: '정보처리기사 필기 스터디', link: '/'},
            {id: 2, content: '스프링 스터디', link: '/'}, 
            {id: 3, content: '리액트 스터디', link: '/'}, 
               ];

        setGroup([...groupdata]);
    }, []);

    return (
       <>
       {
        group.map((group) => (
            <>
            <Container>
                <Row>{" "}</Row>
            <Row>{group.content}</Row>
            <hr/>
            </Container>
            </>
        ))
       }
       </>
    );
};

export default Group;