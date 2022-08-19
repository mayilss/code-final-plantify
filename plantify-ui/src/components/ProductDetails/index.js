import axios from "axios";

import { GreenButton } from "../GreenButton";

import style from "./index.module.scss";
import { useState } from "react";
import { FilterDropdown } from "../FilterDropdown";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const ProductDetails = (props) => {
    const [productId, setProductId] = props.id;
    const [product, setProduct] = useState({});
    // const [name, setName] = useState(product.name || "");
    // const [price, setPrice] = useState(product.price || "");
    // const [brands, setBrands] = useState([]);
    // const [brand, setBrand] = useState(product.brand || "");
    // const [brandId, setBrandId] = useState(product.brandId);
    // const [category, setCategory] = useState(product.category || "");
    // const [categories, setCategories] = useState(null);
    // const [categoryId, setCategoryId] = useState(product.categoryId);
    // const [selectedFile, setSelectedFile] = useState(product.image);

    const [isActive, setIsActive] = props.state;

    const fetchProduct = async () => {
        return await axios(
            process.env.REACT_APP_API_URL + `/products/${productId}`
        );
    };

    const { isLoading } = useQuery(["singleProduct"], fetchProduct, {
        onSuccess: (data) => {
            setProduct(data.data[0]);
            console.log("prod", product);
        },
    });

    if (isLoading) return <div>Loading</div>;

    return (
        <div>
            <form encType="true" className={style.form}>
                <div className="d-flex">
                    <div className="col-6">
                        <div className={style.item}>
                            <label htmlFor="name">Id</label>
                            <p> {product.id} </p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="name">Name</label>
                            <p> {product.name} </p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="price">Price</label>
                            <p> {product.price} </p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="Brands">Brands</label>
                            <p> {product.brand} </p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="Categories">Categories</label>
                            <p> {product.category} </p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="StockKeepingUnit">
                                StockKeepingUnit
                            </label>
                            <p> {product.stockKeepingUnit} </p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="CreatedDate">Created Date</label>
                            <p> {product.createdDate} </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={style.item}>
                            <label htmlFor="image">Image</label>
                            <img src={product.image} alt="img" />
                        </div>
                    </div>
                </div>
                <div className={style.btnHolder}>
                    <div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsActive("products-all");
                            }}
                            className={style.goBtn}
                        >
                            Go to the list
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
