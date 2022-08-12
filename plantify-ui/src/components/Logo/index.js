import { Link } from "react-router-dom";
import logo from "../../images/plantify-logo.png";

export const Logo = (props) => {
    return (
        <Link to="/">
            <img width={props.width} src={logo} alt="Logo" />
        </Link>
    );
};
