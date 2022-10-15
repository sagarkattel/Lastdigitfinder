import { useState } from "react";
import "./TodoApp.css";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Lastdigit() {
    const [input, setInput] = useState({ num1: "", num2: "" });
    const [result, setResult] = useState();

    const handleChange = event => {
        setInput({
            ...input, [event.target.name]: event.target.value
        })
    }
    function Modulo(a, b) {

        // Initialize result
        let mod = 0;

        // calculating mod of b with a to make
        // b like 0 <= b < a
        for (let i = 0; i < b.length; i++)
            mod = (mod * 10 + b[i] - '0') % a;

        return mod; // return modulo
    }

    function LastDigit() {
        const { num1, num2 } = input;

        let len_a = num1.length;
        let len_b = num2.length;

        // if a and b both are 0
        if (len_a === 1 && len_b === 1 &&
            num2[0] === '0' && num1[0] === '0')
            return 1;

        // if exponent is 0
        if (len_b === 1 && num2[0] === '0')
            // eslint-disable-next-line
            return 1;

        // if base is 0
        if (len_a === 1 && num1[0] === '0')
            // eslint-disable-next-line
            return 0;

        // if exponent is divisible by 4 that
        // means last digit will be pow(a, 4)
        // % 10. if exponent is not divisible
        // by 4 that means last digit will be
        // pow(a, b%4) % 10
        const exp = (Modulo(4, num2) === 0) ? 4 :
            Modulo(4, num2);

        // Find last digit in 'a' and compute
        // its exponent
        const res = Math.pow(num1[len_a - 1] - '0', exp);

        // Return last digit of result
        setResult(res % 10);
    }

    return (
        <div className="app">
        <h1 className="text-center mb-4">Value of Last Digit of Power</h1>
            <Form>
                <Form.Group>
                <Form.Label><b>Enter the Base</b></Form.Label>
                <br />
                    <input type="number"
                        onChange={handleChange}
                        placeholder="Enter the base "
                        value={input.num1}
                        name="num1"

                    />
                    <br />
                    <Form.Label><b>Enter the Power</b></Form.Label>
                    <br />
                    <input type="number"
                        onChange={handleChange}
                        placeholder="Enter the Power "
                        value={input.num2}
                        name="num2"

                    />
                    <hr
                        style={{
                            color: "red",
                            backgroundColor: "yellow",
                            height: 0,
                        }}
                    />
                </Form.Group>
                <Button variant="primary mb-3" onClick={LastDigit}>Calculate</Button>
            </Form>

            <p>
                The Value of Last Digit is {result}
            </p>

        </div>
    );
}