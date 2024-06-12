import React, { createContext, useState } from 'react';

//export context to reuse
export const TotalPriceContext = createContext();

/** Provider to wrap and use TotalPrice and handleBuy to update price in a lower level components */
export  function TotalPriceProvider({ children }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [showTotal, setShowTotal] = useState(false);

    const handleBuy = (price) => {
        setTotalPrice(prevPrice => prevPrice + price);
        setShowTotal(true);
    };
    return (
        <TotalPriceContext.Provider value={{ totalPrice, showTotal, handleBuy }}>
            {children}
        </TotalPriceContext.Provider>
    );
}
