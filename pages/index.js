'use client';

import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = Number(num1) + Number(num2);
    setSum(result);
  };

  return (
    <div className="container">
      <h1>Number Adder</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second 2number"
            required
          />
        </div>
        <button type="number1">Add Numbers</button>
      </form>
      {sum !== null && (
        <div className="result">
          Result: {sum}
        </div>
      )}
      <style jsx>{`
        .container {
          max-width: 500px;
          margin: 50px auto;
          padding: 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
          margin-bottom: 30px;
        }
        .input-group {
          margin-bottom: 15px;
        }
        input {
          padding: 10px;
          font-size: 16px;
          width: 200px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        button:hover {
          background-color: #0051cc;
        }
        .result {
          margin-top: 20px;
          font-size: 20px;
          font-weight: bold;
          color: #0070f3;
        }
      `}</style>
    </div>
  );
}