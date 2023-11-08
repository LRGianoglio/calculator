import { useSelector } from 'react-redux';
import './Screen.css'
import { InitialState } from '../../redux/interfaces';

function Screen() {

  const screen = useSelector((state:InitialState)=>state.screen)

  return (
    <div className='Screen'>
      <p className='FirstLine'>1234+3221</p>
      <p className='SecondLine'>4455.69</p>
    </div>
  );
}

export default Screen;