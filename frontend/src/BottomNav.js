import React, { useState } from 'react';
// 사용할 아이콘 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';


import './css/BottomNav.css';

const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);

    return (
<nav class="navbar fixed-bottom">
  <div class="container row" style={{float: 'none', margin:'100 auto'}}>
    <div class="col-md-3" style={{float: 
      'none', margin:'0 auto'}}>

    <div class="card">
  <div class="card-body">

    <Container>
      <Row>

  <Col>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <FontAwesomeIcon icon={faHome} className={activeNav === 1 ? "nav-item active" : "nav-item"} />
        </Link>
        </Col>

        <Col>
      <Link to="/group" className="nav-link" onClick={() => setActiveNav(2)}>
        <FontAwesomeIcon icon={faUsers} className={activeNav === 2 ? "nav-item active" : "nav-item"} />
        </Link>
        </Col>

        <Col>
      <Link to="/profile" className="nav-link" onClick={() => setActiveNav(3)}>
        <FontAwesomeIcon icon={faAddressCard} className={activeNav === 3 ? "nav-item active" : "nav-item"} />
        </Link>
        </Col>

        </Row>
        </Container>

    </div>
</div>


    </div>
  </div>

</nav>
    );
};

export default BottomNav;