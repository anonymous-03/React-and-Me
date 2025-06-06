import { useEffect,useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    
    useEffect(()=>{
        const fetchCurrencyInfo = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error('Failed to fetch currency info:', err);
            }
        };

        fetchCurrencyInfo();
    },[currency]);
    return data;
}

export default useCurrencyInfo;