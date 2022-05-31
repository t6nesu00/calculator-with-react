import { useState } from "react";

import './Main.css';


function Buttons() {

    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setResult(result.concat(e.target.innerHTML));
    }

    const clearAll = (e) => {
        setResult("");
    }

    const backSpace = (e) => {
        setResult(result.slice(0, -1));
    }
       
        return <div className="container">
                <div className="calculator">
                    <div id="result">{result}</div>
                    <div className="digits">
                    <button onClick={clearAll} className="clear opt">C</button>
                    <button className="opt" onClick={backSpace}>B</button>
                    <button onClick={handleChange} className="opt">/</button>
                    <button onClick={handleChange}>7</button>
                    <button onClick={handleChange}>8</button>
                    <button onClick={handleChange}>9</button>
                    <button onClick={handleChange} className="opt">&times;</button>
                    <button onClick={handleChange}>4</button>
                    <button onClick={handleChange}>5</button>
                    <button onClick={handleChange}>6</button>
                    <button onClick={handleChange} className="opt">-</button>
                    <button onClick={handleChange}>1</button>
                    <button onClick={handleChange}>2</button>
                    <button onClick={handleChange}>3</button>
                    <button onClick={handleChange} className="opt">+</button>
                    <button onClick={handleChange}>0</button>
                    <button onClick={handleChange}>.</button>
                    <button className="result opt">Result</button>
                    </div>
                </div>
            
        </div>
    }

export default Buttons;