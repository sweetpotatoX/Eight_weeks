//import logo from './logo.svg';
import './App.css';

import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react';



function App() {

const [count, setCount] = useState(-1);

const springs = useSpring({
  number: count,
  from: { number: 0 }, 
  config: { duration: 200, friction: 20 },
});
  return (
    <div className="App">
      
        <h1>
          Animated Number TEst
        </h1>
        {/* <animated.h2>
        Count: {springs.number.to(n => n.toFixed(0))} 
      </animated.h2> */}
        <h2>
          Count: {count}
        </h2>
        <button onClick={() => setCount(count + 1)}>
          Increment
          </button>
          <button onClick={() => setCount(count - 1)}>
          dencrement
          </button>
      

    </div>
  );
}

export default App;
