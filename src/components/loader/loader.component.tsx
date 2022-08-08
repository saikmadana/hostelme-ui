import React from "react";
import './loader.component.css'
import loader from "../../assets/images/loader.gif";

export const Loader = () => {

    return(
        <div className="loader">
            <img src={loader} alt="Loading..." />
        </div>
    );
}