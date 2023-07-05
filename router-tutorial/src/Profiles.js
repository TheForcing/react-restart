import React from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile from "./Profile";

const Profiles = ()=>{
   

    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink style={({ isActive})=>({ color: isActive? 'black' : 'white'})} to="/profiles/velopert">velopert</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive})=> 'nav-link' + (isActive? 'activated' : '')} to="/profiles/gildong">gildong</NavLink>
                </li>
            </ul>
            <Routes>
            <Route
             path="/*"
             exact
            element={ <div>사용자를 선택해주세요.</div>}
             />
             <Route path=":username" element={<Profile/>}/>
             </Routes>
           
        </div>
    );
};

export default Profiles;