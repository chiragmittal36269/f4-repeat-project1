import React, { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState("");

    function isValidate() {
        if (num1 === "" || num2 === "") {
            setError("Please enter a number");
            setResult("");
            return false;
        } else if (isNaN(num1)) {
            setError("Please enter a valid num1");
            setResult("");
            return false;
        } else if (isNaN(num2)) {
            setError("please enter a valid num2");
            setResult("");
            return false;
        } else {
            setError("");
            return true;
        }
    }

    function calculate(value) {
        if (isValidate()) {
            let number1 = parseFloat(num1);
            let number2 = parseFloat(num2);

            switch (value) {
                case "+": {
                    setResult(number1 + number2);
                    break;
                }
                case "-": {
                    setResult(number1 - number2);
                    break;
                }
                case "*": {
                    setResult(number1 * number2);
                    break;
                }
                default: {
                    setResult(number1 / number2);
                    break;
                }
            }
        }
    }

    return (
        <div className="container">
            <div className="main">
                <h1 className="calculator-head">React Calculator</h1>

                <input
                    type="text"
                    placeholder="Num 1"
                    onChange={(e) => setNum1(e.target.value.trim())}
                />
                <input
                    type="text"
                    placeholder="Num 2"
                    onChange={(e) => setNum2(e.target.value.trim())}
                />

                <div className="operators">
                    <button
                        onClick={() => {
                            calculate("+");
                        }}
                    >
                        +
                    </button>
                    <button
                        onClick={() => {
                            calculate("-");
                        }}
                    >
                        -
                    </button>
                    <button
                        onClick={() => {
                            calculate("*");
                        }}
                    >
                        *
                    </button>
                    <button
                        onClick={() => {
                            calculate("/");
                        }}
                    >
                        /
                    </button>
                </div>

                {error && <h4 className="error">Error!</h4>}
                {(result || result === 0) && (
                    <h4 className="success">Success!</h4>
                )}
                {error && <h4 className="msg1">{error}</h4>}
                {(result || result === 0) && (
                    <h4 className="msg2">Result: {result}</h4>
                )}
            </div>
        </div>
    );
};

export default Calculator;
