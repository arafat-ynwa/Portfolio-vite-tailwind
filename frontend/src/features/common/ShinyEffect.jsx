
function ShinyEffect({ left, right, top, size, maxWidth }) {
  const positionStyles = {
    position: "absolute",
    borderRadius: '50%',
    background: "radial-gradient(circle, rgba(29, 53, 113, 0.2), transparent 70%)",
    top: `${top}px`,
    width: `${size}vw`,
    maxWidth: `${maxWidth}px`,
    height: `${size}px`,
    zIndex: -10,
  };

  if (left !== undefined) {
    positionStyles.left = `${left}vw`;
  }

  if (right !== undefined) {
    positionStyles.right = `${right}vw`;
  }

  return <div style={positionStyles}></div>;
}

export default ShinyEffect;
