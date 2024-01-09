type SidebarProps = {
  algorithm: string;
  setAlgorithm: (algorithm: string) => void;
};

function Sidebar({ algorithm, setAlgorithm }: SidebarProps) {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>RapidTri</h3>
        </div>
        <div className="seperator-line"></div>
        <div className="sidebar-menu">
          <ul className="sidebar-menu-items">
            <li
              className={`sidebar-text ${
                algorithm === "bubble" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("bubble");
                }}
              >
                Bubble Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "insertion" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("insertion");
                }}
              >
                Insertion Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "selection" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("selection");
                }}
              >
                Selection Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "merge" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("merge");
                }}
              >
                Merge Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "quick" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("quick");
                }}
              >
                Quick Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "heap" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("heap");
                }}
              >
                Heap Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "radix" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("radix");
                }}
              >
                Radix Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "shell" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("shell");
                }}
              >
                Shell Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "cocktail" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("cocktail");
                }}
              >
                Cocktail Sort
              </button>
            </li>
            <li
              className={`sidebar-text ${
                algorithm === "bogo" ? "selected" : ""
              }`}
            >
              <button
                onClick={() => {
                  setAlgorithm("bogo");
                }}
              >
                Bogo Sort
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
