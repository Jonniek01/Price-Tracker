import React from 'react';
import './Coin.css';

const Coin= ({name,image,symbol,volume,price,priceChange,marketCap}) =>{
    return(
        <div className='coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">$ {volume.toLocaleString()}</p>
                    {
                        priceChange < 0 ?(                          
                              <p className="coin-percent red">{priceChange} %</p>

                        ):( <p className="coin-percent green">{priceChange} %</p>)


                        } 
                        <p class="market-cap">$ {marketCap.toLocaleString()}</p>


                </div>
            </div>
        </div>
    )
}

export default Coin;