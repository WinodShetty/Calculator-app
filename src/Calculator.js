import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '.' && input.includes('.')) {
      return;
    }
    setInput((prevInput) => prevInput + value);
    setResult('');
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      if (input === '') {
        setResult('Enter an expression');
        return;
      }

      if (input.includes('/0') && !input.includes('/0/0')) {
        setResult('Infinity');
        return;
      }

      if (input === '0/0') {
        setResult('NaN');
        return;
      }

      if (/[+\-*/]$/.test(input)) {
        setResult('Invalid expression');
        return;
      }

      const evaluatedResult = new Function('return ' + input)();
      setResult(evaluatedResult.toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {['7', '8', '9', '+'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['4', '5', '6', '-'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['1', '2', '3', '*'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['C', '0', '=', '/'].map((btn) => (
          <button
            key={btn}
            onClick={btn === 'C' ? handleClear : btn === '=' ? handleEqual : () => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
