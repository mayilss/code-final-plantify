import { useContext, useEffect, useState } from "react";

import hrt from "../../icons/d-heart.svg";
import dphone from "../../icons/phone.svg";
import cartg from "../../icons/cart-g.svg";
import plus from "../../icons/plus.svg";
import minus from "../../icons/minus.svg";

import style from "./index.module.scss";
import { CartContext, FavoritesContext } from "../../contexts";

export const Details = () => {
    const currentProduct = JSON.parse(window.sessionStorage.getItem("details"));

    const { favoritesState } = useContext(FavoritesContext);
    const [favsArray, setFavsArray] = favoritesState;
    const [liked, setLiked] = useState(false);

    const { cartState } = useContext(CartContext);
    const [cartArray, setCartArray] = cartState;

    useEffect(() => {
        setFavsArray(JSON.parse(window.localStorage.getItem("favorites")));
        if (
            JSON.stringify(favsArray).includes(JSON.stringify(currentProduct))
        ) {
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
        <main className="container my-4">
            <div className="row my-4 gy-4">
                <div className="col-md-6 col-12">
                    <img
                        src={currentProduct.image}
                        alt="product"
                        width="100%"
                    />
                </div>
                <div className="col-md-6 col-12 ps-5">
                    <div>
                        <h2 className={style.title}>{currentProduct.name}</h2>
                        <p className={style.brand}>{currentProduct.brand}</p>
                    </div>
                    <div
                        className={`${style.price} d-flex justify-content-between`}
                    >
                        <div>
                            <p className={style.priceInner}>
                                Category: {currentProduct.category}
                            </p>
                            <p className={style.priceInner}>
                                {currentProduct.price + " ₼"}
                            </p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleLike(currentProduct);
                            }}
                            className="d-flex align-items-center"
                        >
                            <img className={style.btnHeart} src={hrt} alt="" />
                            <p className="m-0">Seçdiklərimə at</p>
                        </button>
                    </div>
                    <div className="row mt-5 gy-4">
                        <div className="col-6">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCart(currentProduct);
                                }}
                                className={style.btnWhite}
                            >
                                <img src={cartg} alt="" /> <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className="col-6">
                            <button className={style.btnGreen}>
                                <img src={dphone} alt="" /> <p>Əlaqə</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
