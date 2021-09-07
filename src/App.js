import { useState } from "react";
import "./styles.css";

let inputYear;
let userPrimeNumberCheckerInput;
export default function App() {
  const [output, setOutput] = useState("Output will show here.");
  const [outputTwo, setOutputTwo] = useState("Output Will Show Here.");
  const [display, setDisplay] = useState("none");
  const [displayTwo, setDisplayTwo] = useState("none");

  function selectGame(e) {
    switch (e.target.innerText) {
      case "Leap Year Checker":
        setDisplay("block");
        setDisplayTwo("none");
        break;
      case "Prime Number Checker":
        setDisplayTwo("block");
        setDisplay("none");
        break;
      default:
        return;
    }
  }

  function getUserInput(e) {
    let input = e.target.value;
    let birthArr = input.split("-");
    inputYear = birthArr[0];
    console.log(inputYear);
  }

  function validateLeapYear() {
    if (inputYear === "" || inputYear === undefined) {
      return setOutput("Please Input!");
    }

    if (Number(inputYear) % 4 === 0) {
      setOutput("This Is Leap Year!");
    } else {
      setOutput("This Is Not A Leap Year!");
    }
  }

  function getNumberInput(e) {
    userPrimeNumberCheckerInput = e.target.value;
  }

  function validatePrimeNumber() {
    let number = Number(userPrimeNumberCheckerInput);
    let isPrime = true;

    if (
      userPrimeNumberCheckerInput === "" ||
      userPrimeNumberCheckerInput === undefined
    ) {
      return setOutputTwo("Please Input!");
    }

    if (number <= 0) {
      return setOutputTwo("Negative values can't be prime number");
    }

    if (number === 1) {
      setOutputTwo("1 is a co-prime number.");
    }

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      setOutputTwo("This number is a prime Number.");
    } else {
      setOutputTwo("This number is not a prime number.");
    }
  }

  return (
    <div className="App">
      <div className="navigationbar">
        <h1>React Mini Apps</h1>
        <p>
          This app contains two mini games. Click on button below to continue.
        </p>
        <button onClick={selectGame}>Leap Year Checker</button>
        <button onClick={selectGame}>Prime Number Checker</button>
      </div>

      <div className="LeapYearprojectcontainer" style={{ display: display }}>
        <h1>Leap Year Checker</h1>
        <p>
          A leap year comes in every 4 year. Leap year has 366 days. Enter your
          birthday and it will tell you whether your birthyear is leap year or
          not.
        </p>
        <input type="date" onChange={getUserInput} />
        <button className="validateleapyear" onClick={validateLeapYear}>
          Check
        </button>
        <div className="outputbox">
          <p>{output}</p>
        </div>
      </div>

      <div
        className="primenumberprojectcontainer"
        style={{ display: displayTwo }}
      >
        <h1>Prime number Checker</h1>
        <p>
          A prime number is a whole number greater than 1 that is divisible by 1
          and itself only. Enter a number to check.
        </p>
        <input type="number" onChange={getNumberInput} />
        <button className="validateleapyear" onClick={validatePrimeNumber}>
          Check
        </button>
        <div className="outputbox">
          <p>{outputTwo}</p>
        </div>
      </div>
    </div>
  );
}
