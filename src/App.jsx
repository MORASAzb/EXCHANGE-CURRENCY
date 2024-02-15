نوimport './App.css'
import { useEffect, useState } from 'react';
import ChangeRow from './component/exchange currency/ChangeRow'
import CurrentDate from './component/date/Date'
const BASEURL = 'https://v6.exchangerate-api.com/v6/a357c7e6a5c9c46d8ced6f86/latest/USD';


function App() {
  const [currencyOption, setCurrencyOption] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  let toAmount, fromAmount;


  if (amountInFromCurrency) {
    fromAmount = toAmount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASEURL)
      .then(res => res.json()).then(data => {
        const firstCurrency = Object.keys(data.conversion_rates)[1]
        setCurrencyOption([data.base_code, ...Object.keys(data.conversion_rates)])
        setFromCurrency(data.base_code)
        setToCurrency(firstCurrency)
        setExchangeRate(data.conversion_rates[firstCurrency])
      })


  }, [])

  useEffect(() => {
 if(fromCurrency != null && toCurrency != null){
  fetch(`${BASEURL}?base=${fromCurrency}&symbols=${toCurrency}`)
  .then(res => res.json())
  .then(data => setExchangeRate(data.conversion_rates[toCurrency]))
 }

  }, [fromCurrency,toCurrency])
  

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }



  return (
    <>
      <h1>exchange currency</h1>

      <div className="middle">
        <div className="date">
          <CurrentDate />
        </div>
        <ChangeRow
          currencyOption={currencyOption}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(event) => setFromCurrency(event.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <div className="equal">
          =
        </div>
        <ChangeRow
          currencyOption={currencyOption}
          selectedCurrency={toCurrency}
          onChangeCurrency={(event) => setToCurrency(event.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>

    </>
  )
}

export default App
