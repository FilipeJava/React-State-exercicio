// 1 passo importar o React
import React from 'react'
// 2 importando objeto de comunicação Dom com VDOM
import  ReactDOM  from 'react-dom'
//importanto minha APP main
import App from './App'

// Criando conexção Dom - Vdom

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
