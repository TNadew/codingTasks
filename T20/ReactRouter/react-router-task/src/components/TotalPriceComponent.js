import React from 'react';
import "../Styles/TotalPriceStyle.css"

/**Total price component to show the price taking toatalPrice as prop */
export default function TotalPrice({ totalPrice, showTotal=true }) {
    if(showTotal){
    return (
        <div className='totalPrice'>
            <h4 >
                Total price: £{totalPrice.toFixed(2)}
            </h4>
        </div>
    );}
}
