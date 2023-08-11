import { useDispatch } from "react-redux"
import { minusCounter } from "../reducers/countSlice"

const MinusCount = () => {
  const dispatch = useDispatch()

  return (
    <button className="btn btn-secondary" onClick={() => dispatch(minusCounter())}>Minus</button>
  )
}

export default MinusCount