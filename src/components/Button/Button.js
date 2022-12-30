import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <>
      <Link to={props.to} className={props.clase}>
        {props.texto}
      </Link>
    </>
  );
};

export default Button;
