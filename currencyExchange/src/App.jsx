import React, { useRef,useState,useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import "./App.css";

function App() {
    
  const inputRef = useRef(null);
  const [fromvalue, setfromValue] = useState();
  const [tovalue, settoValue] = useState();
  const [toCurrency, setToCurrency] = useState("inr");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const data=useCurrencyInfo(fromCurrency);
  useEffect(() => {
    const temp=data?.[fromCurrency];
    if (temp) {
    setCurrencyOptions(Object.keys(temp));
  }}, [data, fromCurrency]);

 

    const swap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setfromValue(tovalue);
        settoValue(fromvalue);
    }
    
    const convertCurrency = () => {
      const cost= data?.[fromCurrency]?.[toCurrency] * fromvalue || 0;
      settoValue(cost);
    }
  
    

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://th.bing.com/th/id/OIP.xdbqBj0lQSytjXgRa9807wHaF7?r=0&rs=1&pid=ImgDetMain')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                isRequired="true"
                                Amount={fromvalue}
                                onAmountChange={(amount)=>{
                                    setfromValue(amount);
                                }}
                                onCurrencyChange={(currency) => {
                                    setFromCurrency(currency);
                                }}
                                currencyvalue={fromCurrency}
                                options={currencyOptions}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="From"
                                isRequired={false}
                                Amount={tovalue}
                                onAmountChange={(amount)=>{
                                    settoValue(amount);
                                }}
                                onCurrencyChange={(currency) => {
                                    setToCurrency(currency);
                                }}
                                currencyvalue={toCurrency}
                                options={currencyOptions}
                                
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convertCurrency}>
                            Convert {fromCurrency} to {toCurrency}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  export default App;
