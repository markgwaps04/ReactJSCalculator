
import React, { useContext} from 'react';
import { CalculatorKey } from './CalculatorKey'; 
import { DisplayContext } from '../App';



export const CalculatorOperatorKey = function() {

    const displayContext = useContext(DisplayContext);

    const triggerEqual = function() {
        displayContext.setOutput(displayContext.previewDisplay);
        (document.getElementById('output_display') as HTMLElement).style.display = "none";
        (document.getElementById('preview_display') as HTMLElement).style.fontSize = "0.6em";
    }

    return (
        <div className="operator-keys">
            <CalculatorKey clickEvent={() => displayContext.setDisplay('÷')} id="operator-devide" keyname='÷' />
            <CalculatorKey clickEvent={() => displayContext.setDisplay('×')} id="operator-multiply" keyname='×' />
            <CalculatorKey clickEvent={() => displayContext.setDisplay('-')} id="operator-subtract" keyname='-' />
            <CalculatorKey clickEvent={() => displayContext.setDisplay('+')} id="operator-add" keyname='+' />
            <CalculatorKey clickEvent={triggerEqual as Function}  id="operator-equals" keyname='=' />
        </div>
    )
}



export default React.memo(CalculatorOperatorKey)