import React from 'react'
import { numberWithCommas } from '../../helpers/helperFunction'
import style from "./SideDetailsCard.module.scss"

interface propsData {
    data :any
}

function SideDetailsCard({data} : propsData) {
  return (
    <div className={style.sideCardWrapper}>
    <img src={data?.image?.large} alt ="imgCoin"></img>
    <h3>{data?.name}</h3>
    <div className={style.description}>
        {data?.description?.en.split(". ")[0]}
    </div>
    <div className={style.details}>
        <span className={style.title}>Rank:</span>
        <span className={style.value}> {numberWithCommas(data?.market_cap_rank)}</span>
    </div>
    <div className={style.details}>
        <span className={style.title}>Current Price:</span>
        <span className={style.value}>  {numberWithCommas(
                data?.market_data?.current_price["USD".toLowerCase()]
              )}</span>
    </div>
    <div className={style.details}>
        <span className={style.title}> Market Cap:</span>
        <span className={style.value}>   {numberWithCommas(
                data?.market_data?.market_cap["USD".toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}</span>
    </div>
  </div>
  )
}

export default SideDetailsCard