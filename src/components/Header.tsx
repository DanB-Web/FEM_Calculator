import ModeToggle from './ModeToggle'
import '../styles/header.scss'

const Header = ({ toggleMode }:any) => {
  return (
    <div className='header-container'>
      <h1>calc</h1>
      <ModeToggle toggleMode={toggleMode}/>
    </div>
  )
}

export default Header