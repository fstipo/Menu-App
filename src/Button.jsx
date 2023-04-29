const Button = ({ text, onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick}>
      {text || 'all'}
    </button>
  );
};
export default Button;
