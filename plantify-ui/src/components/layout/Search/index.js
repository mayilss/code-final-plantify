import { Link } from "react-router-dom";
import { Logo } from "../../Logo/index";
import { SearchBar } from "../../SearchBar/index";
import { useContext, useEffect, useState } from "react";

import style from "./index.module.scss";

import wishlistIcon from "../../../icons/wishlist-icon.svg";
import cartIcon from "../../../icons/cart-icon.svg";
import sidebarIcon from "../../../icons/sidebar-icon.svg";
import { SideMenu } from "../SideMenu";
import { CartContext, FavoritesContext } from "../../../contexts";

export const Search = () => {
    const [isActive, setIsActive] = useState(false);
    const [favQuantity, setFavsQuantity] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);

    const { favoritesState } = useContext(FavoritesContext);
    const [favsArray, setFavsArray] = favoritesState;

    const { cartState } = useContext(CartContext);
    const [cartArray, setCartArray] = cartState;

    useEffect(() => {
        setFavsQuantity(favsArray.length);
    }, [favsArray]);
    useEffect(() => {
        setCartQuantity(cartArray.length);
    }, [cartArray]);

    const handleSideMenu = () => {
        setIsActive(true);
    };

    return (
        <section>
            <div className={`container ${style.wrapper}`}>
                <div className={`col-sm-2 col-5 ${style.logo}`}>
                    <Logo />
                </div>
                <div className={`col-9 ${style.search}`}>
                    <SearchBar />
                </div>
                <div className={`col-7 col-sm-1 ${style.right}`}>
                    <Link to="/favorites" className={style.btn}>
                        <img src={wishlistIcon} alt="wishlist icon" />
                        <span className={style.quantity}>{favQuantity}</span>
                    </Link>
                    <Link to="/cart" className={style.btn}>
                        <img src={cartIcon} alt="cart icon" />
                        <span className={style.quantity}>{cartQuantity}</span>
                    </Link>
                    <button
                        onClick={() => {
                            handleSideMenu();
                        }}
                        className={style.sideMenu}
                    >
                        <img src={sidebarIcon} alt="" />
                    </button>
                </div>
            </div>

            {isActive && <SideMenu state={[isActive, setIsActive]} />}
        </section>
    );
};
