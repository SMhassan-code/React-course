import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("PKR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convertCurrency = () => {
    if (amount !== 0) {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
    }
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convertCurrency()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount) => setAmount(amount)}
                                currencyOptions={options}
                                onCurrencyChange={(from) => setFrom(from)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer hover:bg-blue-500 transition-all duration-500 ease-in-out"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onAmountChange={(amount) => setAmount(amount)}
                                currencyOptions={options}
                                onCurrencyChange={(to) => setTo(to)}
                                selectCurrency={to}
                                amountDisplay // Passing something means the value is by default true
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-500 transition-all duration-500 ease-in-out hover:scale-101 hover:shadow-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
