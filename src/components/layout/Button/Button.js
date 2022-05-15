import ButtonStyle from "./ButtonStyle";

const Button = ({ action, text }) => {
  return <ButtonStyle onClick={action}>{text}</ButtonStyle>;
};
export default Button;
