import { useState } from 'react';

const ChangeNums = () => {
  const [num, SetNums] = useState(0);
  const IncrementorNums = () => {
    SetNums(num + 5);
  };
  const DecrementNums = () => {
    SetNums(num - 5);
  };
  return (
    <>
      <div
        style={{
          // border: '2px solid red',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1>INCREMENT / DECREMENT COUNTER USING REACT HOOKS</h1>
        <div>
          <button onClick={() => DecrementNums()} style={{ cursor: 'pointer' }}>
            -
          </button>
          <input value={num}></input>
          <button
            onClick={() => IncrementorNums()}
            style={{ cursor: 'pointer' }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangeNums;
