import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import style from "./index.module.scss";

import arrowLeft from "../../icons/arrow-left.svg";
import arrowRight from "../../icons/arrow-right.svg";
import cardBg from "../../images/front-view-bouquet.png";
import cardBgb from "../../images/front-view-bouquet-2.png";

import { GreenButton } from "../GreenButton";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Bannerslider = () => {
    const [sliderItems, setSliderItems] = useState([]);
    const fetchSliderItems = async () => {
        return await axios(
            process.env.REACT_APP_API_URL + `/home/bannerslider`
        );
    };
    const { isLoading } = useQuery(["sliders"], fetchSliderItems, {
        onSuccess: (data) => {
            setSliderItems(data.data);
        },
    });
    if (isLoading) return <div></div>;
    return (
        <div className="row gy-4 mt-4">
            <div className="col-md-9 col-12">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {sliderItems.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={`carousel-item slide ${
                                        style.banner
                                    } ${
                                        item == sliderItems[0] ? "active" : ""
                                    }`}
                                >
                                    <div className={style.bannerImg}>
                                        <img src={item.image} alt="banner" />
                                        <div className={style.bannerContent}>
                                            <p>{item.content}</p>
                                            <div className={style.btnHolder}>
                                                <GreenButton innerText="Show more" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className={`carousel-control-prev ${style.prev}`}
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <img src={arrowLeft} alt="arrow-left" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className={`carousel-control-next ${style.next}`}
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <img src={arrowRight} alt="arrow-right" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div className={style.cards}>
                    <div className="row gy-4">
                        <div className="col-6 col-md-12">
                            <div className={style.card}>
                                <div className={style.cardImg}>
                                    <img src={cardBg} alt="card-bg" />
                                    <div className={style.topCardContent}>
                                        <p>
                                            FAVORITE <br /> PRODUCTS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-12">
                            <div className={style.card}>
                                <div className={style.cardImg}>
                                    <img src={cardBgb} alt="card-bg" />
                                    <div className={style.bottomCardContent}>
                                        <p>
                                            GIFT <br /> FLOWERS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
