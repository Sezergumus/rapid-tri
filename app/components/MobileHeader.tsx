type MobileHeaderProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function MobileHeader({ open, setOpen }: MobileHeaderProps) {
  return (
    <div className="header">
      <h1>RapidTri</h1>
      <button
        className={`hamburger-icon${open ? " open" : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
    </div>
  );
}

export default MobileHeader;
