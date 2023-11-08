import './Calculator.css'
import { Screen, Buttons } from '../index';

function Calculator() {
  return (
    <div className='Calculator'>
      <Screen />
      <Buttons />
    </div>
  );
}

export default Calculator;