import React, { useContext } from 'react';
import { Figure } from 'react-bootstrap';
import TotalPrice from './TotalPriceComponent';
import storeimg1 from '../Ressources/store1.jpg';
import storeimg2 from '../Ressources/Store 2.jpg';
import '../Styles/AboutStyle.css'
import { TotalPriceContext } from './TotalPriceContext';
import { memo } from 'react';

/**About store page component with totalPrice and showTotal props to show the current price */
export default memo(function About() {
    const { totalPrice, showTotal } = useContext(TotalPriceContext);
    
    return (
        <div className="about">
            <TotalPrice totalPrice={totalPrice} showTotal={showTotal}/>
            <p>Welcome to Souk.com where you can fin anything and everything you need or did not think you needed</p>
            <Figure>
                <Figure.Image
                    className='storeImg'
                    alt="Store Image 1"
                    src={storeimg1} />
                <Figure.Caption >Kensington Store</Figure.Caption>
            </Figure>
            <Figure>
                <Figure.Image
                    className='storeImg'
                    alt="Store Image 2"
                    src={storeimg2}/>
                <Figure.Caption >Dubai Store</Figure.Caption> 
            </Figure>
            <p >Contact us at: contact@soukDotKom.com</p>
        </div>
    );
}
)
