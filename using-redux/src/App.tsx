import { decrement, increment } from "./redux/features/counter/counterSlice"

import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {

  const dispatch = useAppDispatch()

  const { count } = useAppSelector((state) => state.counter)
  // This line extracts the count value from your Redux store.
  // useSelector is a hook from react-redux used to read values from the Redux store.
  // (state)=>state.counter Takes the full Redux store state and Returns only the counter slice of that state


  const handleIncrement = (amount: number) => {
    // dispatch(increment({ amount: amount }))
    dispatch(increment(amount))
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <div>
        <h1>Counter With Redux</h1>
        <button onClick={() => handleIncrement(5)}>Increment By 5 </button>
        <button onClick={() => handleIncrement(1)}>Increment </button>
        <div>
          {count}
        </div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
