import { useContext, useEffect, useState } from "react";

import { TextContent } from "../../components/TextContent";
import { CardList } from "../../components/ProductCard/CardList";

import arrowLeft from "../../icons/arrow-left.svg";
import arrowRight from "../../icons/arrow-right.svg";
import detailsPic from "../../images/details-pic.png";
import hrt from "../../icons/d-heart.svg";
import temp from "../../icons/d-temp.svg";
import water from "../../icons/d-water.svg";
import clock from "../../icons/d-clock.svg";
import dphone from "../../icons/phone.svg";
import cartg from "../../icons/cart-g.svg";
import plus from "../../icons/plus.svg";
import minus from "../../icons/minus.svg";
import noImg from "../../images/no-img.png";

import style from "./index.module.scss";
import { ProductContext } from "../../contexts";

export const Details = () => {
    // const { singleProductState } = useContext(ProductContext);
    // const [singleProduct, setSingleProduct] = singleProductState;

    const currentProduct = JSON.parse(window.sessionStorage.getItem("details"));
    const [quantity, setQuantity] = useState(currentProduct.STOK === 0 ? 0 : 1);
    console.log(currentProduct);

    // useEffect(() => {
    //     window.sessionStorage.setItem('details', JSON.stringify(singleProduct))
    // }, []);

    // useEffect(() => {
    //     setSingleProduct(JSON.parse(window.sessionStorage.getItem("details")));
    //     console.log("onchange: ", singleProduct);
    //     console.log("session: ", JSON.parse(window.sessionStorage.getItem("details")));
    // }, [singleProduct]);

    const handleDecrement = () => {
        if (quantity <= 1) {
            return;
        }
        setQuantity(quantity - 1);
    };
    const handleIncrement = () => {
        if (quantity > currentProduct.STOK - 1) {
            return;
        }
        setQuantity(quantity + 1);
    };

    return (
        <main className="container my-4">
            <div className="row my-4 gy-4">
                <div className="col-md-6 col-12">
                    <img src={currentProduct.image} width="100%"></img>
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
                                {currentProduct.price + " ₼"}
                            </p>
                        </div>
                        <button className="d-flex align-items-center">
                            <img className={style.btnHeart} src={hrt} alt="" />
                            <p className="m-0">Seçdiklərimə at</p>
                        </button>
                    </div>
                    <div className="row mt-5 gy-4">
                        <div className="col-3">
                            <div className={style.quantity}>
                                <button
                                    onClick={() => {
                                        handleDecrement();
                                    }}
                                >
                                    <img src={minus} alt="" />
                                </button>
                                <p>{quantity}</p>
                                <button
                                    onClick={() => {
                                        handleIncrement();
                                    }}
                                >
                                    <img src={plus} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="col-5">
                            <button className={style.btnWhite}>
                                <img src={cartg} alt="" /> <p>Səbətə at</p>
                            </button>
                        </div>
                        <div className="col-4">
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
