import React, { useRef,useId } from "react";


function InputBox({
    label,
    isRequired = true,
    currencyvalue = "USD",
    Amount,
    onAmountChange,
    onCurrencyChange,
    options=["hari", "sai", "kiran"],
    className = "",
}) {
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={Amount}
                    onChange={(e)=> {
                        onAmountChange(Number(e.target.value))
                    } }
                    required={isRequired}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currencyvalue}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    required={isRequired}
                    
                >
                
                {options.map((element)=>{
                    return <option value={element}>{element}</option>
                })}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;