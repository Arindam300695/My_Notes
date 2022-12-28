import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { changeBackgroundColor, decrement, increment, incrementBy, resetBackgorundColor, } from "./Redux/actionCreator";
import { useEffect } from "react";

function App() {
  const data = useSelector((info) => info.counterReducer);
  console.log(data);

  const dispatch = useDispatch()

  const incrementHandler=()=>{
    dispatch(increment())
  }
  const decrementHandler=()=>{
    dispatch(decrement())
  }
  const incrementByHandler=()=>{
    dispatch(incrementBy(5))
  }
  const changeBackgroundColorHandler=()=>{
   dispatch(changeBackgroundColor("#FF6E31"))
  }
  const resetColor=()=>{
    dispatch(resetBackgorundColor())
  }

  useEffect(() => {
    const bodyRef = document.querySelector("body")
    bodyRef.style.backgroundColor = data.color
    console.log(bodyRef)
  });

  return (
    <div className="App">
      <h2>React-Redux Tutorial</h2>
      <div style={{marginTop:"10px"}}>
        <button className="btn" onClick={decrementHandler}>-</button>
        <input type="text" value={data.value} className="input" />
        <button className="btn" onClick={incrementHandler}>+</button>
      </div>
      <div style={{marginTop:"10px"}}>
        <button className="btn" onClick={incrementByHandler}>increment by 5</button>
      </div>
      <div style={{marginTop:"10px"}}>
        <button className="btn" onClick={changeBackgroundColorHandler}>change background color</button>
      </div>
      <div style={{marginTop:"10px"}}>
        <button className="btn" onClick={resetColor}>reset background color</button>
      </div>
    </div>
  );
}

export default App;
