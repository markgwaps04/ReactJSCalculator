
import React, {useContext} from 'react';
import { CalculatorKey } from './CalculatorKey'; 
import { DisplayContext } from '../App';


const CalculatorDigitKey = function() {

    const displayContext = useContext(DisplayContext);

    return (

        <div className="digit-keys">
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('0')} className="key-zero" id="zero" keyname='0' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('.')} className="key-dot" id="dot" keyname='●' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('1')} id="one" keyname='1' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('2')} id="two" keyname='2' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('3')} id="three" keyname='3' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('4')} id="four" keyname='4' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('5')} id="five" keyname='5' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('6')} id="six" keyname='6' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('7')} id="seven" keyname='7' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('8')} id="eight" keyname='8' />
            <CalculatorKey clickEvent={ ()=> displayContext.setDisplay('9')} id="nine" keyname='9' />
        </div>

    )
    
}

export default React.memo(CalculatorDigitKey)