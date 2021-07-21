

const ModeToggle = ({ toggleMode }:any) => {

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleMode(e.target.id)
  }

  return (
    <div className='modetoggle-container'>
      <label>theme</label>
      <div className='toggle-radios'>
        <div className='toggle-radio-input radio-checked'>
          <p>1</p>
          <input
            className='mode-radio' 
            type='radio' 
            name='radio' 
            id='theme1' 
            defaultChecked
            onChange={(e) => radioHandler(e)}/>
        </div>
        <div className='toggle-radio-input'>
          <p>2</p>
          <input 
            className='mode-radio' 
            type='radio' 
            name='radio' 
            id='theme2'
            onChange={(e) => radioHandler(e)}/>
        </div>
        <div className='toggle-radio-input'>
          <p>3</p>
          <input 
            className='mode-radio' 
            type='radio' 
            name='radio' 
            id='theme3' 
            onChange={(e) => radioHandler(e)}/>
        </div>
      </div>
    </div>
  )
}

export default ModeToggle