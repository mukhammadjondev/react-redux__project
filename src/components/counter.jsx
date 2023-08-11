import AddCount from "./addCount"
import MinusCount from "./minusCount"
import ResetCount from "./resetCount"

const Counter = () => {
  return (
    <div className="btn-group">
      <AddCount />
      <MinusCount />
      <ResetCount />
    </div>
  )
}

export default Counter