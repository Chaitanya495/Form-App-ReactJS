import React from "react";
import './Save.css';
import { useNavigate } from "react-router-dom";

const Save = () => {

    const navigate = useNavigate();

    const refreshHandler = () => {
        navigate('/form');
    }

    return(
        <div className="save-main">
            <div className="save-card">
                <p className="save-text">Your Response have been saved Successfully...!</p>

                <button className="refill-btn" onClick={refreshHandler}>ADD MORE RESPONSE</button>
            </div>
        </div>
    );
};

export default Save;