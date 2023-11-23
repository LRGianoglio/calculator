import { useDispatch } from 'react-redux';
import { SetScreenText } from '../../redux/actions';
import './Buttons.css'

function Buttons() {
  
  const dispatch = useDispatch()

  const handleClick = (key: string) =>{
    dispatch(SetScreenText(key));
  }

  return (
    <div className='Buttons'>
      <button className='ACButton' onClick={()=>handleClick("AC")}>AC</button>
      <button className='OPButton' onClick={()=>handleClick("/")}>/</button>
      <button className='OPButton' onClick={()=>handleClick("x")}>x</button>
      <button className='NumButton' onClick={()=>handleClick("7")}>7</button>
      <button className='NumButton' onClick={()=>handleClick("8")}>8</button>
      <button className='NumButton' onClick={()=>handleClick("9")}>9</button>
      <button className='OPButton' onClick={()=>handleClick("-")}>-</button>
      <button className='NumButton' onClick={()=>handleClick("4")}>4</button>
      <button className='NumButton' onClick={()=>handleClick("5")}>5</button>
      <button className='NumButton' onClick={()=>handleClick("6")}>6</button>
      <button className='OPButton' onClick={()=>handleClick("+")}>+</button>
      <button className='NumButton' onClick={()=>handleClick("1")}>1</button>
      <button className='NumButton' onClick={()=>handleClick("2")}>2</button>
      <button className='NumButton' onClick={()=>handleClick("3")}>3</button>
      <button className='EqButton' onClick={()=>handleClick("=")}>=</button>
      <button className='ZeroButton' onClick={()=>handleClick("0")}>0</button>
      <button className='NumButton' onClick={()=>handleClick(".")}>.</button>
    </div>
  );
}

export default Buttons;