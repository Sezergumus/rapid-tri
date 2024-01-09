import { useState } from "react";

function Controls() {
  const [delay, setDelay] = useState(0);
  const [arraySize, setArraySize] = useState(100);
  const [arrayRange, setArrayRange] = useState(100);

  return (
    <div className="controls">
      <div className="control">
        <label htmlFor="delay">Speed:</label>
        <input
          type="range"
          id="delay"
          name="delay"
          min="0"
          max="1000"
          onChange={(e) => {
            setDelay(parseInt(e.target.value));
          }}
        />
        <p>Delay: {delay} ms</p>
        <label htmlFor="delay">Array Size:</label>
        <input
          type="range"
          id="delay"
          name="delay"
          min="2"
          max="1000"
          value={arraySize}
          onChange={(e) => {
            setArraySize(parseInt(e.target.value));
          }}
        />
        <p>Array Size: {arraySize}</p>
        <label htmlFor="delay">Array Range:</label>
        <input
          type="range"
          id="delay"
          name="delay"
          min="1"
          max="1000"
          value={arrayRange}
          onChange={(e) => {
            setArrayRange(parseInt(e.target.value));
          }}
        />
        <p>Array Range: 0-{arrayRange}</p>
        <p>Comparison Count: {5}</p>
        <p>Array Accesses: {5}</p>
        <p>Array Size: {5}</p>
        {/* buttons */}
        <div className="buttons">
          <button>Start</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Controls;
