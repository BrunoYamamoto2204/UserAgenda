import React from "react"
import { Routes, Route } from "react-router-dom";
import Agenda from "./main/Agenda";
import Home from "./template/Home";


const RoutesApp = props => 
    <Routes> 
        <Route path="/agenda" element={<Agenda/>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Agenda/>} />
    </Routes>
export default RoutesApp