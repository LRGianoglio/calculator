import { useSelector } from 'react-redux';
import './Screen.css'
import { InitialState } from '../../redux/interfaces';

function Screen() {

  const screen = useSelector((state:InitialState)=>state.screen)
  const resultScreen = useSelector((state:InitialState)=>state.resultScreen)

  return (
    <div className='Screen'>
      <p className='FirstLine'>{screen}</p>
      <p className='SecondLine'>{resultScreen}</p>
    </div>
  );
}

export default Screen;