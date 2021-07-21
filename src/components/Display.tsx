import '../styles/display.scss'

const Display = ({displayValue, firstOperand, operator, calculating}:any) => {

  return (
    <div className='display-container'>
      <p>{calculating && `${firstOperand} ${operator}`}</p>
      <p>{Number(displayValue).toLocaleString()}</p>
    </div>
  )
}

export default Display;
