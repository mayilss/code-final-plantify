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
                        <Link to="/cart">Səbət</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favoritlər</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">Haqqımızda</Link>
                    </li>
                    <li>
                        <Link to="/delivery-terms">Çatdırılma şərtləri</Link>
                    </li>
                    <li>
                        <Link to="useful-info">Faydalı məlumatlar</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Foto/Video</Link>
                    </li>
                    <li>
                        <Link to="/contact">Əlaqə</Link>
                    </li>
                </ul>
            </div>
        )
    );
};
