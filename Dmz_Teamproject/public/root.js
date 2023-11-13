import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
