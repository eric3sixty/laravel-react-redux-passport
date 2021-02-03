import React, { Component } from 'react';
import Login from './Login';
import "../styles/home.css";

export default function Home(){
    return (
        <div className="container">
            <div className="center">
            <div className="row">
                <div className="col-xl-6">
                    <h1>Integrated Financial Management Information System</h1>
                </div>
                <div className="col-xl-6">
                    <Login />
                </div>
            </div>
            </div>
            
        </div>
    )
}