import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';

import Agenda from './main/Agenda';
import Header from "./template/Header"
import RoutesApp from './Routes';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <main>
      <RoutesApp/>
    </main>
  </BrowserRouter>
)
