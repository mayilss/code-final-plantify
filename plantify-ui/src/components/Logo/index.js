import { Link } from "react-router-dom";
import logo from "../../icons/logo.svg";

export const Logo = (props) => {
    return (
            <Link to="/">
                <img width={props.width} src={logo} alt="Logo" />
            </Link>
    );
}