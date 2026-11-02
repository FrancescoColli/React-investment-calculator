import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";
export default function Calculator ({onCalculate}) {

const [inputValues,setInputValues] = useState(["", "", "", ""]);


function handleInput(inputEvent, index) {

let updatedInputs = [...inputValues];
updatedInputs[index] = inputEvent.target.value;
setInputValues(updatedInputs);
}


function handleCalculate (){
  const results =  calculateInvestmentResults ({  
    initialInvestment: Number(inputValues[0]),
    annualInvestment: Number(inputValues[1]),
    expectedReturn: Number(inputValues[2]),
    duration: Number(inputValues[3]),})
    onCalculate(results);
};
    return(
<section id="user-input"
onKeyDown={(event) => {
    if (event.key === 'Enter') {
      event.currentTarget.querySelector('button').click();
    }
  }}>
    <div className="input-group">
    <label>
        Initial investment
    <input type="number" required min={0} max={9999999999} step={1}
     onChange={(inputEvent) => handleInput(inputEvent, 0)}/> 
</label>
    <label>
        Annual investment
    <input type="number" max={999999999} step={1}
    onChange={(inputEvent) => handleInput(inputEvent, 1)}/> 
</label>
</div>
 <div className="input-group">
    <label>
        Expected return
    <input type="number" step={0.01} max={1000} min={-99.99}
    onChange={(inputEvent) => handleInput(inputEvent, 2)}/> 
</label>

    <label>
        Duration
    <input type="number" min={1} max={100} step={1}
    onChange={(inputEvent) => handleInput(inputEvent, 3)}/> 
</label>
</div>
 <button
    disabled= {!(inputValues[0] >= 0 && inputValues[0] !== ""
    && inputValues[1] !== ""
    && inputValues[2] !== ""
    && inputValues[3] > 0
    && inputValues[3] !== ""
    )}
 onClick={handleCalculate}
>Calculate!</button>
</section>
 );
}