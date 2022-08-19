import style from "./index.module.scss";

import btn from "../../icons/cart-btn.svg";
import fav from "../../icons/favs.svg";
import noImg from "../../images/no-img.png";
import { CartContext, FavoritesContext } from "../../contexts";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ProductCard = (props) => {
    const { favoritesState } = useContext(FavoritesContext);
    const [favsArray, setFavsArray] = favoritesState;
    const [liked, setLiked] = useState(false);

    const { cartState } = useContext(CartContext);
    const [cartArray, setCartArray] = cartState;

    useEffect(() => {
        setFavsArray(JSON.parse(window.localStorage.getItem("favorites")));
        if (JSON.stringify(favsArray).includes(JSON.stringify(props.product))) {
            setLiked(true);
        }
    }, []);

    const handleLike = (product) => {
        if (
            window.localStorage
                .getItem("favorites")
                .includes(JSON.stringify(product))
        ) {
            const newFavs = favsArray.filter((filteredProduct) => {
                return filteredProduct.id != product.id;
            });
            setFavsArray(newFavs);
            setLiked(false);
        } else {
            setFavsArray([...favsArray, product]);
            setLiked(true);
        }
    };

    const handleCart = (product) => {
        if (
            window.localStorage
                .getItem("cart")
                .includes(JSON.stringify(product))
        ) {
            return;
        } else {
            setCartArray([...cartArray, { ...product, quantity: 1 }]);
        }
    };
    return (
        <div className={style.card}>
            <div className={style.imgHolder}>
                <img
                    className={style.productImg}
                    onError={({ currentTarget }) => {
                        currentTarget.src = noImg;
                    }}
                    src={props.img}
                    alt="cartflower"
                />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleLike(props.product);
                    }}
                    className={liked ? style.favBtnActive : style.favBtn}
                >
                    <img src={fav} alt="favs"></img>
                </button>
            </div>
            <div className={style.content}>
                <p className={style.name}>{props.title}</p>
                <p className={style.price}>{props.price + " ₼"} </p>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCart(props.product);
                    }}
                >
                    <img src={btn} alt="cartbtn" />
                    Add to cart
                </button>
            </div>
        </div>
    );
};
