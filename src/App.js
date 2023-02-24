import { useState } from "react";
import "./App.css";



function App() {

  const [visible, setVisibility] = useState(true);

  function toggleHandler() {
    setVisibility(!visible);
  }

  let mycontent;

  if (visible) {
    mycontent = 
    <div className="mydiv2">
        <h2>This is the target div</h2>
        <p>lorem ipsum</p>
    </div>
  }

  return (
   <>
      <div className="container">
        <div className="mydiv">
          <button onClick={toggleHandler}>Click Me</button>
          {mycontent}
        </div>
      </div>
   </>
  );
}

export default App;
