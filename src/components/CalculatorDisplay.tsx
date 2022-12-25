import React, { useContext, memo } from 'react';
import { DisplayContext } from '../App';
import '../css/calculatorDisplay.css';

interface CalculatorDisplayProps {
    scale_output_display : number
}

export const CalculatorDisplay = memo(function(props : CalculatorDisplayProps) {

    const displayContext = useContext(DisplayContext);

    return (
        <div className="display">
            <div className='output' style={{ transform: `scale(${props.scale_output_display},${props.scale_output_display})` }} id="output_display">{displayContext.outputDisplay}</div>
            <div className='preview' id="preview_display">{displayContext.previewDisplay}</div>
        </div>
        
    )
})