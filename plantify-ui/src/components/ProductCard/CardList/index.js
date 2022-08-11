import { ProductCard } from "../index";
import { Link } from "react-router-dom";

import style from "./index.module.scss";

export const CardList = () => {
    return (
        <div className={`${style.wrapper} my-4`}>
            <div className="row gy-4">
                <div className="col-md-3 col-6">
                    <ProductCard />
                </div>
                <div className="col-md-3 col-6">
                    <ProductCard />
                </div>
                <div className="col-md-3 col-6">
                    <ProductCard />
                </div>
                <div className="col-md-3 col-6">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}