import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Header from './Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons';

// const Header = (props) => {

//     const MainHeader = () => {
//         return (
//             <>
//             <div>메인 페이지</div>
//             </>
//         );
//     };

//     const GroupHeader = () => {
//         return (
//             <>
//             <div>그룹 페이지</div>
//             </>
//         );
//     };

//     const ProfileHeader = () => {
//         return (
//             <>
//             <div>프로필 페이지</div>
//             </>
//         );
//     };

//     console.log(props.menu);
//     return (
//         <>
//         <div class="container">
//                        <div className="TextBox">
//                         <div>
//                         <Routes>
//                        <Route path="/" element={<MainHeader/>}/>
//             <Route path="/group" element={<GroupHeader/>}/>
//             <Route path="/profile" element={<ProfileHeader/>}/>
//             </Routes>
//                         </div>
//            </div>
//            <div class="row">
//            <div class="col-8">col-8</div>
//            <div class="col-4"><FontAwesomeIcon icon={faBell} /></div>
//            </div>
          
//            <hr/>
//            </div>
//         </>
//     );
// };

// export default Header;

const Header = () => {

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

    const textStyle = {
        marginTop: '58px',
    }
    return (
        <>
        <header>

  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container-fluid">
    <div className="TextBox">
                        <div>
                        <Routes>
                       <Route path="/" element={<MainHeader/>}/>
            <Route path="/group" element={<GroupHeader/>}/>
            <Route path="/profile" element={<ProfileHeader/>}/>
            </Routes>
                        </div>
           </div>
           <div class="row">
           <div class="col-8"></div>
           <div class="col-4"><FontAwesomeIcon icon={faBell} /></div>
           </div>
    </div>
  </nav>

  <div class="p-5 text-center bg-light" style={textStyle}>
    <h1 class="mb-3">Heading</h1>
  </div>
</header>
        </>
    );
};

export default Header;

