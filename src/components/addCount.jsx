import { useDispatch } from "react-redux"
import { plusCounter } from "../reducers/countSlice"

const AddCount = () => {
  const dispatch = useDispatch()

  return (
    <button className="btn btn-success" onClick={() => dispatch(plusCounter())}>Plus</button>
  )
}

export default AddCount