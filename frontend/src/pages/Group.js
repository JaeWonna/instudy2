import React, { useState, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import groupMember from '../img/groupMember.jpg'; 
import { Link } from "react-router-dom";

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

    const imgStyle = {
        width: '70px',
    }

    return (
       <>
       {
        group.map((group) => (
            <>
            <Container>
                <Row>{" "}</Row>
            <Row>{group.content}</Row>
            <Row><Link to={group.link}>{group.content}</Link></Row>
            <hr/>
            </Container>
            </>
        ))
       }
             <div class="flex-shrink-0">
                  <img src={groupMember} alt="Generic placeholder" class="img-fluid rounded-circle border border-dark border-3" style={imgStyle} />

              </div>
       </>
    );
};

export default Group;