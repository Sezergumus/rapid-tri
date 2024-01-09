import MarkBar from "./MarkBar";
import Controls from "./Controls";
import { useState, useEffect, useRef } from "react";

function Content() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(
    contentRef.current?.clientHeight
  );

  useEffect(() => {
    setContentHeight(contentRef.current?.clientHeight);
    console.log(contentHeight);
  }, []);

  return (
    <div className="content-container" ref={contentRef}>
      <div className="graph-controls">
        <MarkBar contentHeight={contentHeight || 0} />
        <Controls />
      </div>
      <div className="info-container">
        <h3>Bubble sort</h3>
      </div>
    </div>
  );
}

export default Content;
