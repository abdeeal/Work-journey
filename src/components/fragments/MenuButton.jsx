const                                                                                      MenuButton = ({ height, width, menuButton, setMenuButton }) => {
  const styles = {
    menu: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      padding: 0,
    },
    line: {
      fill: "none",
      stroke: "black",
      strokeWidth: 6,
      transition:
        "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
    line1: {
      strokeDasharray: "60 207",
      strokeWidth: 6,
    },
    line2: {
      strokeDasharray: "60 60",
      strokeWidth: 6,
    },
    line3: {
      strokeDasharray: "60 207",
      strokeWidth: 6,
    },
    openedLine1: {
      strokeDasharray: "90 207",
      strokeDashoffset: -134,
      strokeWidth: 6,
    },
    openedLine2: {
      strokeDasharray: "1 60",
      strokeDashoffset: -30,
      strokeWidth: 6,
    },
    openedLine3: {
      strokeDasharray: "90 207",
      strokeDashoffset: -134,
      strokeWidth: 6,
    },
  };

  return (
    <div>
      <div
        style={styles.menu}
        onClick={() => setMenuButton(!menuButton)}
        aria-label="Main Menu"
        aria-expanded={menuButton}
        className={menuButton ? "opened" : ""}
      >
        <svg width={width} height={height} viewBox="0 0 100 100">
          <path
            style={{
              ...styles.line,
              ...styles.line1,
              ...(menuButton ? styles.openedLine1 : {}),
            }}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            style={{
              ...styles.line,
              ...styles.line2,
              ...(menuButton ? styles.openedLine2 : {}),
            }}
            d="M 20,50 H 80"
          />
          <path
            style={{
              ...styles.line,
              ...styles.line3,
              ...(menuButton ? styles.openedLine3 : {}),
            }}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>
    </div>
  );
};

export default MenuButton;
