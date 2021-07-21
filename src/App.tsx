import { useState, useEffect } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import Keyboard from './components/Keyboard'
import 'normalize.css'
import './App.scss'

function App() {

  const [displayValue, setDisplayValue] = useState('0')
  const [calculating, setCalculating] = useState(false)

  const [firstOperand, setFirstOperand] = useState(0)
  const [secondOperand, setSecondOperand] = useState(0)
  const [operator, setOperator] = useState('')

  const numberHandler = (number: number) => {
    if (displayValue === '0') {
      setDisplayValue(number.toString())
      return
    }
    setDisplayValue(displayValue + number)
  }

  const operationHandler = (operation:any) => {
    if (!calculating) {
      setCalculating(true)
      setFirstOperand(parseFloat(displayValue))
      setOperator(operation)
      setDisplayValue('0')
      return
    }
    setDisplayValue('0')
    setOperator(operation)
  }

  const deleteHandler = () => {
    setDisplayValue(displayValue.slice(0, -1))
  }

  const resetHandler = () => {
    setCalculating(false)
    setDisplayValue('0')
    setFirstOperand(0)
    setSecondOperand(0)
    setOperator('')
  }

  const resultHandler = async () => {
    setSecondOperand(parseInt(displayValue))
  }

  useEffect(() => {
    let currentSum = 0
    if (operator === '+') currentSum = firstOperand + secondOperand
    if (operator === '-') currentSum = firstOperand - secondOperand
    if (operator === 'x') currentSum = firstOperand * secondOperand
    if (operator === '/') currentSum = firstOperand / secondOperand
    setFirstOperand(currentSum)
    setDisplayValue(currentSum.toString())
    setCalculating(false)
    // eslint-disable-next-line
  }, [secondOperand])

  //TOGGLE MODES
  const toggleMode = (newTheme:string) => {
      trans();
      document.documentElement.setAttribute('data-theme', newTheme);
  }

  //TRANSITION ON MODE CHANGE
  const trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
    document.documentElement.classList.remove('transition')}, 200);
  };

  return (
    <div className="App">
      <Header toggleMode={toggleMode}/>
      <Display 
        displayValue={displayValue}
        firstOperand={firstOperand}
        operator={operator}
        calculating={calculating}
      />
      <Keyboard 
        numberHandler={numberHandler}
        operationHandler={operationHandler} 
        deleteHandler={deleteHandler} 
        resetHandler={resetHandler} 
        resultHandler={resultHandler}
        calculating={calculating}
      />
    </div>
  );
}

export default App;
