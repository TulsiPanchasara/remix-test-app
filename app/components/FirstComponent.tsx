import { useDispatch, useSelector } from "react-redux";
import { counterSlice, increment } from "./ReduxStore/reducer";


const FirstComponent = () => {
  console.log("this isssss====", counterSlice.getInitialState())
    const counter = useSelector((state: any) => state.counter)
console.log('counter',counter);
  const { value } = counterSlice.getInitialState();
  console.log('value',value)
  const dispatch = useDispatch();

  return (
    <div className="border border-black" >
      <div>I AM PARENT COMPONENT</div>
      <button className="cursor-pointer" onClick={() => dispatch(increment())} >
        CLICK ME TO CHECK REDUX EXAMPLE =========== {value}
      </button>
    </div>
  )
}

export default FirstComponent