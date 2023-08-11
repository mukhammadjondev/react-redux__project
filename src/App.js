import { useSelector } from "react-redux"
import Counter from "./components/counter"

const App = () => {
  const state = useSelector(state => state.count)

  return (
    <div className="container">
      <h1>Counter: {state}</h1>
      <Counter  />
    </div>
  )
}

export default App