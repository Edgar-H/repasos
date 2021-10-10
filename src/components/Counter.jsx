import React, { useState } from 'react';

const Counter = () => {
  const [cont, setCont] = useState(0);

  const Add = () => {
    setCont(cont + 1);
  };
  const Reduce = () => {
    setCont(cont - 1);
  };

  return (
    <>
      <h1 className='text-center text-6xl font-bold'>Hello World!</h1>
      <div className='contador mt-10'>
        <p className='text-center text-xl'>Accountant: {cont}</p>
        <div className='control flex justify-center my-6'>
          <button
            onClick={Add}
            className='mr-8 bg-blue-600 hover:bg-blue-500 btn-cont'
          >
            Add
          </button>
          <button
            onClick={Reduce}
            className='bg-yellow-600 hover:bg-yellow-500 btn-cont'
          >
            Reduce
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
