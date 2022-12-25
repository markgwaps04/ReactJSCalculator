
import React, { useCallback, useContext } from 'react';
import { CalculatorKey}  from './CalculatorKey'; 
import { DisplayContext } from '../App';


interface CalculatorFunctionKeysProps {
    removeFinalTotal : Function
}


const CalculatorFunctionKeys = function(props : CalculatorFunctionKeysProps) {

    const displayContext = useContext(DisplayContext);


    const clearAll = useCallback(function() {
        displayContext.setOutput('');
        displayContext.setPreview('');
        props.removeFinalTotal();

    }, [displayContext.outputDisplay, displayContext.previewDisplay])


    

    const signToggle = useCallback(function() {
        const newValue = parseFloat(displayContext.outputDisplay) * -1;

        if(newValue > 0) {
            displayContext.setOutput(newValue);
            return;
        }

        displayContext.setOutput(newValue);

        props.removeFinalTotal();

    },[displayContext.outputDisplay, displayContext.previewDisplay])


    

    return (
        <div className="function-keys">
            <CalculatorKey clickEvent={clearAll as Function} id="clear" keyname='C' />
            <CalculatorKey clickEvent={signToggle as Function} id="sign" keyname='±' />
            <CalculatorKey clickEvent={() => displayContext.setDisplay("%")} id="percent" keyname='%' />
        </div>
    )


}


export default React.memo(CalculatorFunctionKeys)