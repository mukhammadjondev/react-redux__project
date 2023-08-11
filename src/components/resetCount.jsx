import { useDispatch } from "react-redux"
import { resetCount } from "../reducers/countSlice"

const ResetCount = () => {
  const dispatch = useDispatch()
  return (
    <button className="btn btn-danger" onClick={() => dispatch(resetCount())}>Reset</button>
  )
}

export default ResetCount