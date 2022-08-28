import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
