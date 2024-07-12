import React, { useState } from 'react';
import './Calculator.css'; // Import CSS for styling

function Calculator() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleClick = (value) => {
    if (error) setError(''); // Clear error on new input
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setError('');
  };

  const handleEqual = () => {
    try {
      if (input === '') {
        setError('Error');
      } else {
        const result = eval(input.replace(/(\d)([+/*-])/g, '$1 $2 '));
        setInput(result.toString());
      }
    } catch (err) {
      setError('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={error || input} readOnly />
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
