import "./Button.scss";

const Button = ({ text, styling }) => {
  return <button className={`button button--${styling}`}>{text}</button>;
};

export default Button;
