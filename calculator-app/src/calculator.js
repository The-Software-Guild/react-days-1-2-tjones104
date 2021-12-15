import { useEffect, useState } from "react";

const Calc = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (isNaN(e.target.name)) {
      setResult(result.concat(" " + e.target.name + " "));
    } else {
      setResult(result.concat(e.target.name));
    }
  };

  const handleClear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="app">
      <h1>Calculator</h1>

      <div className="calculator">
        <div className="body">
          <input className="results" type="text" value={result}></input>
          <div className="keypad">
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="-" onClick={handleClick}>
              -
            </button>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="+" onClick={handleClick}>
              +
            </button>
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="*" onClick={handleClick}>
              x
            </button>
            <button name="C" onClick={handleClear}>
              C
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button name="=" onClick={calculate}>
              =
            </button>
            <button name="/" onClick={handleClick}>
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
