import React, {useState} from 'react';
import Button from './Button';

const Counter = () => {
    const [number, setNumber] = useState(10)

  return (
    <div className="flex gap-2">
        <Button onClick={() => setNumber(number + 1)}>+</Button>
            <div>{number}</div>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
    </div>
  )
}

export default Counter;