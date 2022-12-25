import React from 'react';
import '../css/calculatorKey.css';

interface CalculatorKeyProps {
    id: string;
    keyname : string,
    className : string,
    clickEvent : Function
}



export const CalculatorKey = function(props : CalculatorKeyProps) {

    return (
        <button onClick={props.clickEvent as any} className={"calculator-key " + props.className} id={props.id}> {props.keyname} </button>
    )

}

CalculatorKey.defaultProps = {
        id :  "",
        keyname: "",
        className : "",
        clickEvent : new Function
}


export default React.memo(CalculatorKey)

