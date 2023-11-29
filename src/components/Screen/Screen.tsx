import { useSelector } from 'react-redux';
import './Screen.css'
import { InitialState } from '../../interfaces';
import { resultScreenTrimmer } from '../../utils/utils';

function Screen() {

  const screen = useSelector((state:InitialState)=>state.screen)
  const resultScreen = useSelector((state:InitialState)=>state.resultScreen)

  return (
    <div className='Screen'>
      <p className='FirstLine'>{screen}</p> {/* 20 coso */}
      <p className='SecondLine'>{resultScreenTrimmer(resultScreen)}</p> {/* 12 coso */}
    </div>
  );
}

export default Screen;