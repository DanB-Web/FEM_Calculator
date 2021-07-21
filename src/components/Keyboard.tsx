import '../styles/keyboard.scss'

const Keyboard = ({numberHandler, operationHandler, deleteHandler, resetHandler, resultHandler, calculating}:any) => {
  return (
    <div className='keyboard-container'>
      <div className='keyboard-row'>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(7)}
        >7</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(8)}
        >8</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(9)}
        >9</button>
        <button 
          className='btn-secondary btn-small' 
          onClick={() => deleteHandler()}
          disabled={!calculating}
        >DEL</button>
      </div>
      <div className='keyboard-row'>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(4)}
        >4</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(5)}
        >5</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(6)}
        >6</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => operationHandler('+')}
        >+</button>
      </div>
      <div className='keyboard-row'>
        <button 
          className='btn-primary btn-small'  
          onClick={() => numberHandler(1)}
        >1</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(2)}
        >2</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(3)}
        >3</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => operationHandler('-')}
        >-</button>
      </div>
      <div className='keyboard-row'>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler('.')}
        >.</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => numberHandler(0)}
        >0</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => operationHandler('/')}
        >/</button>
        <button 
          className='btn-primary btn-small' 
          onClick={() => operationHandler('x')}
        >x</button>
      </div>
      <div className='keyboard-row'>
        <button 
          className='btn-secondary btn-large' 
          onClick={() => resetHandler()}
        >RESET</button>
        <button 
          className='btn-tertiary btn-large' 
          onClick={() => resultHandler()}
        >=</button>
      </div>
    </div>
  )
}

export default Keyboard;