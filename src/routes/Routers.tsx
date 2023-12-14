
import {
    Routes,
    Route,
  } from "react-router-dom";
import CoinPage from "../pages/coinDetails/CoinPage";
import Home from "../pages/home/Home";



function Routers() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/coin/:id" element={<CoinPage/>} />
   </Routes>
  )
}

export default Routers