import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SideChartDetails from '../../components/sideChartDetail/SideChartDetails'
import SideDetailsCard from '../../components/sideDetailsCard/SideDetailsCard'
import { singleCoin } from '../../helpers/ApiRoutes'
import style from "./CoinPage.module.scss"



function CoinPage() {
    const [data, setData] = useState<any>({})
    const { id }: any = useParams()

    /**function of Api call */
    const fetchCoinDetails = async () => {
        try {
            const details = await axios.get(singleCoin(id))
            setData(details?.data)
        } catch (error) {
            console.log(error)
        }
    }
    /*Api call for getting details of perticuler coin */
    useEffect(
        () => {
            fetchCoinDetails()
        }, []
    )

    return (
        <div className={style.coinPageWrapper} >
            <div className={style.sideDetails}>
                <SideDetailsCard data={data} />
            </div>
            <div className={style.chartDetails}>
                <SideChartDetails data={data} />
            </div>
        </div>
    )
}

export default CoinPage