import "./Button.scss";

const Button = ({ text, styling, handleClick }) => {
  return (
    <button className={`button button--${styling}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
