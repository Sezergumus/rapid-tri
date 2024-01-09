type MobileDropdownProps = {
  algorithm: string;
  setAlgorithm: (algorithm: string) => void;
};

function MobileDropdown({ algorithm, setAlgorithm }: MobileDropdownProps) {
  return (
    <div className="mobile-dropdown-container">
      <ul className="dropdown-menu-items">
        <li
          className={`dropdown-text ${
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
          className={`dropdown-text ${
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
          className={`dropdown-text ${
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
          className={`dropdown-text ${algorithm === "merge" ? "selected" : ""}`}
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
          className={`dropdown-text ${algorithm === "quick" ? "selected" : ""}`}
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
          className={`dropdown-text ${algorithm === "heap" ? "selected" : ""}`}
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
          className={`dropdown-text ${algorithm === "radix" ? "selected" : ""}`}
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
          className={`dropdown-text ${algorithm === "shell" ? "selected" : ""}`}
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
          className={`dropdown-text ${
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
          className={`dropdown-text ${algorithm === "bogo" ? "selected" : ""}`}
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
  );
}

export default MobileDropdown;
