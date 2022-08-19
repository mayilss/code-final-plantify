import { Link } from "react-router-dom";
import { SearchBar } from "../../SearchBar/index";
import style from "./index.module.scss";

export const SideMenu = (props) => {
    const [isActive, setIsActive] = props.state;
    const handleClick = () => {
        setIsActive(false);
    };

    return (
        isActive && (
            <div className={style.wrapper}>
                <div className={style.top}>
                    <button
                        onClick={() => {
                            handleClick();
                        }}
                        className={style.close}
                    >
                        <div></div>
                        <div></div>
                    </button>
                    <SearchBar />
                </div>
                <ul>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/delivery-terms">Delivery terms</Link>
                    </li>
                    <li>
                        <Link to="useful-info">Useful info</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    );
};
