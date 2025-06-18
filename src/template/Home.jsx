import React from "react"
import Header from "./Header"
import "./Home.css"

const Home = props => 
    <React.Fragment>
        <Header/>
        <div className="bem-vindo">
            <h1>Bem Vindo</h1>
            <hr />
            <h2>
                Exercício de agenda para cadastro de usuários, com o objetivo de
                desenvolver meus conhecimentos em React
            </h2>
        </div>
    </React.Fragment>


export default Home