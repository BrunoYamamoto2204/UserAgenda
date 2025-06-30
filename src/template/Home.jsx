import React from "react"
import Header from "./Header"
import "./Home.css"

const Home = props => 
    <React.Fragment>
        <Header/>
        <div className="bem-vindo">
            <h1>Bem Vindo(a)ao Projeto Agenda</h1>
            <hr />
            <h2>
                Exercício da agenda de usuários, inclui adição e exclusão de
                cadastros com mensagens personalizadas e layout moderno
            </h2>
        </div>
    </React.Fragment>


export default Home