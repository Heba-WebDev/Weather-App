import React from "react";
import './Additional.css';


export default function Additional() {
    return (
        <div className="container">
            <div className="additional">
            <div className="humidity">
                    <h3>15%</h3>
                    <p>Humidity</p>
                </div>
                <div className="visibility">
                    <h3>5%</h3>
                    <p>Visibility</p>
                </div>
                <div className="uvindex">
                    <h3>98%</h3>
                    <p>UV</p>
                </div>
            </div>
        </div>
    )
}