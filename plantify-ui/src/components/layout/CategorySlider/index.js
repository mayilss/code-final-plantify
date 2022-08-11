import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import style from "./index.module.scss";

import succulent from "../../../icons/succulent-green.svg";
import tree from "../../../icons/tree.svg";
import plant from "../../../icons/plant.svg";
import roses from "../../../icons/roses.svg";
import vector from "../../../icons/Vector.svg";
import terrarium from "../../../icons/terrarium.svg";
import wateringCan from "../../../icons/watering-can.svg";
import fertilizer from "../../../icons/fertilizer.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const options = {
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 4,
        },
        768: {
            items: 6,
        },
        1024: {
            items: 8,
        },
    },
};

export const CategorySlider = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        return await axios(process.env.REACT_APP_API_URL + "/categories");
    };

    const { isLoading } = useQuery(["categories2"], fetchCategories, {
        onSuccess: (data) => {
            setCategories(data.data);
        },
    });

    if (isLoading) return <div>Loading</div>;
    return (
        <OwlCarousel
            className="owl-theme container carousel-wrapper mt-4"
            {...options}
        >
            {categories.map((category) => {
                return (
                    <Link
                        key={category.id}
                        to="/categories"
                        className={`item ${style.itemWrapper}`}
                    >
                        <div className={style.itemHolder}>
                            <img src={category.image} alt="house plants" />
                        </div>
                        <p>{category.name}</p>
                    </Link>
                );
            })}
        </OwlCarousel>
    );
};
