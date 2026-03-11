import { useEffect, useState } from "react";

const API_key = import.meta.env.VITE_EXCHANGE_API_KEY

function useCurrencyInfo (currency) {
    
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${API_key}/latest/${currency}`)
        .then((response) => response.json())
        .then((response) => setData(response.conversion_rates))
    }, [currency])
    
    return data
}

export default useCurrencyInfo