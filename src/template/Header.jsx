import React from "react"
import "./Header.css"

const Header = props =>
    <React.Fragment>
        <header className="menu">
            <div className="logo"><i class="fa-solid fa-calendar-days"></i> Agenda</div>
            <nav>
                <ul className="paginas">
                    <li><div className="|"><a href="./">Home</a></div></li>
                    <li><a href="./agenda">Usuários</a></li>
                </ul>
            </nav>
        </header>
    </React.Fragment>

export default Header