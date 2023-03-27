import React from 'react';
// 사용할 아이콘 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import './css/BottomNav.css';

const BottomNav = () => {
    return (
            <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <div><FontAwesomeIcon icon={faUsers} className="users" /></div>
      <div><FontAwesomeIcon icon={faAddressCard} className="addresscard" /></div>
    </nav>
    );
};

export default BottomNav;