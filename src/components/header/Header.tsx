import axios from "axios"
import { useEffect, useState } from "react"
import { CurrencyState } from "../../context/currencyContext/CurrencyContext"
import { currencyList } from "../../helpers/ApiRoutes"
import Dropdown from "../dropdown/Dropdown"
import style from "./Header.module.scss"

function Header() {
  const [allCurrency, setAllCurrency] = useState<any>([])

  // getting states from context
  const { currency, setCurrency }: any = CurrencyState()


 /*function for getting all currency List */
  const getAllCurrency = async () => {
    try {
      const result = await axios.get(currencyList)
      const modifyData: any = result?.data?.map((e: string) => e?.toUpperCase())
      setAllCurrency(["INR", "USD", ...modifyData])

    } catch (error) {
      console.log(error)
    }
  }

  /* Calling Function for one time for getting list of currency for dropdown  */
  useEffect(
    () => {
      getAllCurrency()
    }, []
  )

  /* handle change dropdown function */
  const handleChangeDropdown = (data: string) => {
    
    /*This will set currency state in global context */
    setCurrency(data)
  }


  return (
    <div className={style.header} >
      <span>Crypto App</span>
      <span className={style.dropdownDiv}>
        <Dropdown
          optionList={allCurrency}
          setDataOutside={handleChangeDropdown}
          defaultText={currency}
        /></span>
    </div>
  )
}

export default Header