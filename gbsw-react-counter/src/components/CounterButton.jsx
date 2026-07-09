import { number } from "motion"

const CounterButton = ({buttonText, changeNum}) => {
    return (
        <button onClick={() =>{
            changeNum(buttonText)
        }}>{buttonText}</button>
    )
}

export default CounterButton