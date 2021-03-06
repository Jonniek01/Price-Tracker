import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin'



function App() {    
  const [coins, setCoins]=useState([]);
  const [search, setSearch]=useState('')

  useEffect(()=>{
    axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
      ).then(
      res=>{
        setCoins(res.data);

    }).catch(error=>console.log("hi john, error in api "+error));
    });

    const handleChange= e =>{
      setSearch(e.target.value)
    }
    const filteredCoins=coins.filter(
      coin=>coin.name.toLowerCase().includes(search.toLowerCase())
    )


  return (
    <div className="coin-app">
      <div className="coin-search">
      <h1 className='coin-text'>Search a currency</h1> 
             <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
       
      </div>
      <div className="coin-row head">
                <div className="coin">
                    <h1> name </h1>
                    <p className="coin-symbol">symbol</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Current Price</p>
                    <p className="coin-volume">Total Volume</p>
                              <p className="coin-percent">Percentage change (24h)</p>



                        <p class="market-cap">Market Cap</p>


                </div>
            </div>

      
      {
        filteredCoins.map(coin=>{
          return(
                      <Coin
                       key={coin.id}
                        name={coin.name}
                       image={coin.image}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        symbol={coin.symbol}
                        priceChange={coin.market_cap_change_percentage_24h}
                        volume={coin.total_volume}
                        />

          )
        }

        )
      }
    </div>
  );
}

export default App;
