import axios from "axios"
import { useEffect, useRef, useState } from "react"
import style from "./App.module.scss"
import Card from "./components/card/Card"
import Header from './components/header/Header'
import Home from "./pages/home/Home"
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routes/Routers"



function App() {
   const [data , setData] = useState([])
 
  
   
  return (
    <div className={style.App}>
        <div className={style.header}>
            <Header/>
        </div>
         <div className={style.home}>
           <Router>
           <Routers/>
          </Router> 
             </div>  
    </div>
  )
}

export default App