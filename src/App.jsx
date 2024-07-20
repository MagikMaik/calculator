
import './App.css';
import Button from './components/Button.jsx'
import Screen from './components/Screen.jsx'
import ButtonClear from './components/ButtonClear.jsx'
import { useState } from "react";
import { evaluate } from "mathjs"
function App() {

  const [input, setInput] = useState('')

  const AddInput = value => {
    setInput(input + value)
  }

  const CalculateResult = () => {

    if (input) {
      setInput(evaluate(input))
    } else {
      alert("No numbers added")
    }
  }
  
  return (
    <div className="App">
      <div className='calculator-container'>
        <Screen input= {input}/>
        <div className="row">
          <Button clickHandler={AddInput}>1</Button>
          <Button clickHandler={AddInput}>2</Button>
          <Button clickHandler={AddInput}>3</Button>
          <Button clickHandler={AddInput}>+</Button>
        </div>
        <div className="row">
          <Button clickHandler={AddInput}>4</Button>
          <Button clickHandler={AddInput}>5</Button>
          <Button clickHandler={AddInput}>6</Button>
          <Button clickHandler={AddInput}>-</Button>
        </div>
        <div className="row">
          <Button clickHandler={AddInput}>7</Button>
          <Button clickHandler={AddInput}>8</Button>
          <Button clickHandler={AddInput}>9</Button>
          <Button clickHandler={AddInput}>*</Button>
        </div>
        <div className="row">
          <Button clickHandler={AddInput}>0</Button>
          <Button clickHandler={AddInput}>.</Button>
          <Button clickHandler={CalculateResult}>=</Button>
          <Button clickHandler={AddInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear clearHandler={ () => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
