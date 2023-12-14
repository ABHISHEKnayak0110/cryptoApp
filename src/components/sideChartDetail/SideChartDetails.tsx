import axios from "axios";
import { useEffect, useState } from "react"
import { constants } from "../../constants/Constants";
import { CurrencyState } from "../../context/currencyContext/CurrencyContext";
import { historicalChart } from "../../helpers/ApiRoutes"
import Chart from "../chart/Chart";
import style from "./SideChartDetails.module.scss"


interface propsData {
    data: any
}
function SideChartDetails({ data }: propsData) {
    const [chartData, setChartData] = useState<any>()
    const [days, setDays] = useState(1)
    const { currency }: any = CurrencyState()

    /*function for Api call  */
    const fetchHistoricData = async () => {
        try {
            const result = await axios.get(historicalChart(data?.id, days, currency?.toLowerCase()));
            setChartData(result?.data?.prices);
        } catch (error) {
            console.log(error)
        }

    };

    /* function call on change of days and  currency for getting chart  */
    useEffect(
        () => {
            if (Object.keys(data)?.length > 0) {
                fetchHistoricData()
            }
        }, [days, data, currency]
    )
    /* function for days button   */
    const handleClickDays = (day: number) => {
        setDays(day)
    }
    return (
        <div className={style.sideChartWrapper}>
            <Chart
                historicData={chartData}
                days={days}
                currency={"USD"}
            />
            <div className={style.buttonContainer}>
                {
                    constants?.optionDays?.map((e: any, i: number) => {
                        return (
                            <button
                                className={`${style.button} ${days === e?.value ? style.highLight : ""}`}
                                onClick={() => handleClickDays(e?.value)}
                            >{e?.label}</button>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SideChartDetails