import React, { useState } from 'react';
// 사용할 아이콘 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


import './css/BottomNav.css';

const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);

    return (
      <nav class="navbar fixed-bottom">
    <div class="card-body d-flex justify-content-center">
<div class="card">
  <div class="card-body">

  <div>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <FontAwesomeIcon icon={faHome} className={activeNav === 1 ? "nav-item active" : "nav-item"} />
        </Link>
        </div>

        <div>
      <Link to="/group" className="nav-link" onClick={() => setActiveNav(2)}>
        <FontAwesomeIcon icon={faUsers} className={activeNav === 2 ? "nav-item active" : "nav-item"} />
        </Link>
        </div>

        <div>
      <Link to="/profile" className="nav-link" onClick={() => setActiveNav(3)}>
        <FontAwesomeIcon icon={faAddressCard} className={activeNav === 3 ? "nav-item active" : "nav-item"} />
        </Link>
        </div>

    </div>
</div>
</div>

</nav>
    );
};

export default BottomNav;