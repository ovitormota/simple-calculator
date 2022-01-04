import React, { useState } from 'react'
import { Button } from './Button'
import './Calculator.css'
import { Display } from './Display'

export const Calculator = () => {
    const [valueDisplay, setValueDisplay] = useState('0')
    const [valuesOperation, setValuesOperation] = useState([0, 0])
    const [operator, setOperator] = useState('')
    const [index, setIndex] = useState(0)

    const clearMemory = () => {
        setValueDisplay('0')
        setValuesOperation([0, 0])
        setOperator('')
        setIndex(0)
    }

    const allResults = (result, operator) => {
        setValuesOperation([result, 0])
        if (operator === '=' && !isNaN(result)) {
            setValueDisplay(result)
            setOperator('')
        } else if (!isNaN(result)) {
            setValueDisplay(result)
            setOperator(operator)
        }
    }

    const setOperation = (operation) => {
        setIndex(1)
        setValueDisplay('0')
        if (operator) {
            switch (operator) {
                case '+':
                    valuesOperation[0] += valuesOperation[1]
                    allResults(valuesOperation[0], operation)
                    break
                case '-':
                    valuesOperation[0] -= valuesOperation[1]
                    allResults(valuesOperation[0], operation)
                    break
                case '*':
                    valuesOperation[0] *= valuesOperation[1]
                    allResults(valuesOperation[0], operation)
                    break
                case '/':
                    valuesOperation[0] /= valuesOperation[1]
                    const result = parseFloat(valuesOperation[0].toFixed(3))
                    allResults(result, operation)
                    break
                default:
                    break
            }
        } else {
            setOperator(operation)
        }
    }

    const addDigit = (num) => {
        if (num !== '.') {
            let newValues = valuesOperation
            newValues[index] = Number(newValues[index] + num)
            setValuesOperation(newValues)
        }
        if (valueDisplay.includes('.') && num === '.') {
            return
        }
        if (valueDisplay.length < 10) {
            if (valueDisplay === '0' && num === '.') {
                setValueDisplay(valueDisplay + num)
            } else if (valueDisplay === '0') {
                setValueDisplay(num)
            } else {
                setValueDisplay(valueDisplay + num)
            }
        }
    }
    return (
        <div className="calculator">
            <Display value={valueDisplay} />
            <Button label="AC" onClick={clearMemory} triple />
            <Button label="/" onClick={setOperation} operation />
            <Button label="7" onClick={addDigit} />
            <Button label="8" onClick={addDigit} />
            <Button label="9" onClick={addDigit} />
            <Button label="*" onClick={setOperation} operation />
            <Button label="4" onClick={addDigit} />
            <Button label="5" onClick={addDigit} />
            <Button label="6" onClick={addDigit} />
            <Button label="-" onClick={setOperation} operation />
            <Button label="1" onClick={addDigit} />
            <Button label="2" onClick={addDigit} />
            <Button label="3" onClick={addDigit} />
            <Button label="+" onClick={setOperation} operation />
            <Button label="0" onClick={addDigit} double />
            <Button label="." onClick={addDigit} />
            <Button label="=" onClick={setOperation} operation />
        </div>
    )
}
