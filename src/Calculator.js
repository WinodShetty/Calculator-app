import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
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
        setResult('Error');
        return;
      }

      
      const parts = input.split('/');
      if (parts.length > 1 && parts.includes('0') && !parts.every((part) => part === '0')) {
        setResult('Infinity');
        return;
      }

      
      if (input === '0/0') {
        setResult('NaN');
        return;
      }

      
      if (!/\d+$/.test(input)) {
        setResult('Error');
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
      <input type="text" value={result || input} readOnly />
      <div className="buttons">
        {/* Button rendering logic... */}
      </div>
    </div>
  );
}

export default Calculator;
