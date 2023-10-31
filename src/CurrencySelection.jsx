import { useContext, useEffect, useState } from "react";
import CurrencyContext from './CurrencyContext.js'
import Context from './Context';

export default function CurrencySelection(){

  const { currency, setCurrency } = useContext(CurrencyContext)
  
  const [currencies, setCurrencies] = useState([]);
  // const [currency, setCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] =useState(1);

  const { state, dispatch } = useContext(Context);

  
  
  const handleSelect = (event) => {
   setCurrency(event.target.value);
    dispatch({
    type: 'currency/set',
    payload: event.target.value
    })
  }


  const loadCurrencies = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php');
    const data = await response.json();
    
    setCurrencies(data);
  }

  

  const loadExchangeRates = async (currency) => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency='+currency)
    const data = await response.json();

    setExchangeRate(data.rate);
  }

  
  useEffect(() => {
    loadCurrencies();
    
  }, []);
  



 useEffect(
  () =>{

    // console.log(currency);
    loadExchangeRates(currency);

},
 [currency]);




 return<>

    <select name="currency" value={ currency } onChange={ handleSelect }>
      {currencies.map(currency=> (
       <option key={currency} value={currency}>{currency}</option>
      ))
      }
      

    </select>

    <br />

    Exchange rate: { exchangeRate } { currency } / 1 EUR

 </>
}