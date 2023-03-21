import Card from 'react-bootstrap/Card';
import HomeCard from "../../Home/HomeCard";
import React, { useState, useEffect } from "react";

function HomeLayout() {
    const [menu, setMenu] = useState([]);

    useEffect(()=> {
        const menudata = [
            {title: "그룹", link: "/group"},
            {title: "프로필", link: "/profile"}
        ];

        setMenu([...menudata]);

        console.log(menu);
    }, []);

    return (
        <main>
            <h1>메인페이지</h1>

            <hr class="col-3 col-md-2 mb-5"/>

            <div class="row g-5">
                <div class="col-md-8">
                    <h2>메뉴</h2>
                    <ul class="icon-list">
                        {
                            menu.map((menu) => (
                                <HomeCard menu={menu}/>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </main>
    )
}

export default HomeLayout;