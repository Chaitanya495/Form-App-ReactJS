import React from "react";

import './FillForm.css';
import { useNavigate } from "react-router-dom";

function FillForm(){

    const navigate = useNavigate();

    const FillFormHandler = () => {
        navigate("/form");
    };

    return(
        <div className="fillform-main">
            <button className="fillform-btn" onClick={FillFormHandler}>Fill the Form</button>
        </div>
    );
};

export default FillForm;