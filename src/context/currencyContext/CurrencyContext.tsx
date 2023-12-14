import React, { createContext, useContext, useEffect, useState } from "react";

const Currency :any = createContext(null);
interface props{
    children : React.ReactNode
}
const CurrencyContext = ({ children } : props) => {
  const [currency, setCurrency] = useState("USD");

  return (
    <Currency.Provider value={{ currency, setCurrency}}>
      {children}
    </Currency.Provider>
  );
};

export default CurrencyContext;

export const CurrencyState = () => {
  return useContext(Currency);
};