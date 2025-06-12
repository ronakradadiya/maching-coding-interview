import { useEffect, useRef, useState } from "react";
import "./App.css";

const OTP_DIGITS_COUNT = 5;

function App() {
  const [inputArr, setInputArr] = useState(Array(OTP_DIGITS_COUNT).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) {
      return;
    }
    
    const newValue = value.trim(); // to handle spaces
    const newInputArr = [...inputArr];
    newInputArr[index] = newValue.slice(-1); // always take last value of the input
    setInputArr(newInputArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  }

  return (
    <>
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => (
        <input
          key={index}
          type="text"
          className="otp-input"
          value={inputArr[index]}
          onChange={(e) => handleOnChange(e.target.value, index)}
          ref={(input) => (refArr.current[index] = input)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
        />
      ))}
    </>
  );
}

export default App;
