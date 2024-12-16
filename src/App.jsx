import React from 'react'
import { x } from './tools/store'


const App = () => {
  const {count , increment , decrement , reset} = x();

  return (
    <>{count}
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>reset</button>

    </>
  )
}

export default App