import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ src, url, title }) => {
    const navigate = useNavigate()
    return (
        <div className="box">
            <img onClick={() => navigate(url)} src={src} alt="" />
            <h3>{title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div >
    );
};

export default Card;