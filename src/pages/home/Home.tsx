import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../components/card/Card"
import { constants } from "../../constants/Constants"
import { CurrencyState } from "../../context/currencyContext/CurrencyContext"
import { coinList } from "../../helpers/ApiRoutes"
import { numberWithCommas } from "../../helpers/helperFunction"
import style from "./Home.module.scss"


function Home() {
    const [data , setData] = useState([])
    const navigate :any= useNavigate();

//    currency from context 
   const {currency} : any = CurrencyState()

 
// Api call if currency changes for getting List of coins 
    useEffect(
        () => {
          axios.get(coinList(currency?.toLowerCase())).then(
              res => setData(res?.data)
          ).catch(er => console.log(er))
        
        },[currency]
    )

     //  This is conditional data , some time this Api is failing  so i have stored response so my page will not blank
     const originalData = data?.length > 0 ? data : constants?.dummyData

    
     /**For navigating , on Click Card */
   const handleClickCard = (id :string) => {
    navigate(`/coin/${id}`)
   }

  return (
    <div className= {style.homeWrapper}>
     <div className={style.cardContainer}>
             {
              originalData?.map((e:any , i :number) => {
                return(
                <div className={style.effect} key ={i} onClick ={() => handleClickCard(e?.id)}>
                  <Card
                   logoUrl={e?.image}
                   netChange24h={e?.price_change_percentage_24h?.toFixed(2)}
                   netChange7d ={`${Math.random()?.toFixed(2)}`}
                   coinName ={e?.name}
                   value={numberWithCommas(e?.current_price?.toFixed(2))}

                  />
                  </div>
                )
              })
            }
             </div>  
    </div>
  )
}

export default Home