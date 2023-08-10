export default function Button({ children, onClickHandler }) {
  return (
    <button onClick={onClickHandler} className="button">
      {children}
    </button>
  );
}
