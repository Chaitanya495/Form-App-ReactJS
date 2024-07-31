import React from "react";

import './MainPage.css';
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return(
        <div>
           <Outlet/>
        </div>
    );
};

export default MainPage;