import logo from './logo.svg';
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import { CalculatorDisplay } from './components/CalculatorDisplay'; 
import CalculatorFunctionKey from './components/CalculatorFunctionKeys'; 
import CalculatorDigitKey from './components/CalculatorDigitKeys'; 
import CalculatorOperatorKey from './components/CalculatorOperatorKeys'; 


interface CalculatorProps {
  id: string;
}

export const DisplayContext = React.createContext({
    "outputDisplay": "",
    "previewDisplay": "",
    "setOutput": new Function,
    "setPreview": new Function,
    "setDisplay"  : new Function
});

const Calculator = function(props : CalculatorProps) {

  const [output, setOutput] = useState("");
  const [preview, setPreview] = useState("");
  const [scaleOutputDisplay, setScaleOutputDisplay] = useState(1);

  
  const removeFinalTotal = function(){

    (document.getElementById('output_display') as HTMLElement).style.display = "inline";
    (document.getElementById('preview_display') as HTMLElement).style.fontSize = "0.3em";

  }

  const setDisplay = useCallback(function(value : string) {
    setOutput( output + String(value));
    removeFinalTotal();
  }, [output])

  const scaleDisplayCalc = function(node_name : string, scale : number, set : Function) {

    const output_display_node = document.getElementById(node_name) as HTMLElement;
    const parentNode = output_display_node.parentNode as HTMLElement;
    const parentNodeCurrentStyle = window.getComputedStyle(parentNode);

    const availableWidth = parentNode.offsetWidth - (Number(String(parentNodeCurrentStyle.paddingLeft).replace('px', '')) * 3 );
    const actualWidth = output_display_node.offsetWidth ;
    const actualScale = availableWidth / actualWidth;
    
    if (scale === actualScale)
      return;

    if (actualScale < 1) {
      set(actualScale)
    } else if (scale < 1) {
      set(1)
    }

  }

  useEffect(function() {

    try {
        let output_formatted = String(output).replaceAll("÷", "/").replaceAll("×", "*")
        const preview_eval = eval(output_formatted);
        setPreview(preview_eval);
    }catch(error) {
        // setPreview(output);
    }

    scaleDisplayCalc("output_display", scaleOutputDisplay, setScaleOutputDisplay);

  }, [output]);


  return (
    <div id={props.id} className="calculator">

      <DisplayContext.Provider value={{
        "outputDisplay" : output,
        "setOutput" : setOutput,
        "previewDisplay" : preview,
        "setPreview" : setPreview,
        "setDisplay" : setDisplay
      }}>

        <CalculatorDisplay scale_output_display={scaleOutputDisplay} />

        <div className="calculator-keypad">

          <div className="input-keys">
            <CalculatorFunctionKey removeFinalTotal={removeFinalTotal}/>
            <CalculatorDigitKey  />
          </div>

          <CalculatorOperatorKey />

        </div>

      </DisplayContext.Provider>


    </div>
  )

}

Calculator.defaultProps = {
  id: "calculator"
};

export default Calculator
