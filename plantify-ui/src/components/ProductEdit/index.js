import axios from "axios";

import { GreenButton } from "../GreenButton";

import style from "./index.module.scss";
import { useState } from "react";
import { FilterDropdown } from "../FilterDropdown";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const ProductEdit = (props) => {
    const [product, setProduct] = props.id;
    const [name, setName] = useState(product.name || "");
    const [price, setPrice] = useState(product.price || "");
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState(product.brand || "");
    const [brandId, setBrandId] = useState(product.brandId);
    const [category, setCategory] = useState(product.category || "");
    const [categories, setCategories] = useState(null);
    const [categoryId, setCategoryId] = useState(product.categoryId);
    const [selectedFile, setSelectedFile] = useState(product.image);

    const [isActive, setIsActive] = props.state;

    const fetchBrands = async () => {
        return await axios(process.env.REACT_APP_API_URL + `/brands`);
    };
    const fetchCategories = async () => {
        return await axios(process.env.REACT_APP_API_URL + `/categories`);
    };
    console.log(product);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("brandId", brandId);
        formData.append("categoryId", categoryId);
        formData.append("image", selectedFile);

        try {
            const res = await axios({
                method: "put",
                url: process.env.REACT_APP_API_URL + `/products/${product.id}`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        setIsActive("products-all");
    };

    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    };
    const handlePrice = (e) => {
        setPrice(e.target.value);
        console.log(price);
    };
    const handleImage = (e) => {
        console.log("img", e.target.files[0]);
        if (e.target.files[0] !== selectedFile) {
            if (e.target.files[0] !== null) {
                setSelectedFile(e.target.files[0]);
            }
        }
        return;
    };

    const { isLoading } = useQuery(["brands6"], fetchBrands, {
        onSuccess: (data) => {
            setBrands(data.data);
        },
    });

    const { isLoading: isLoading2 } = useQuery(
        ["categories6"],
        fetchCategories,
        {
            onSuccess: (data) => {
                setCategories(data.data);
            },
        }
    );
    if (isLoading && isLoading2) return <div>Loading</div>;

    return (
        <div>
            <form encType="true" className={style.form}>
                <div className={style.item}>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={(e) => {
                            handleName(e);
                        }}
                        type="text"
                        id="name"
                        value={name}
                    />
                </div>
                <div className={style.item}>
                    <label htmlFor="price">Price</label>
                    <input
                        onChange={(e) => {
                            handlePrice(e);
                        }}
                        type="text"
                        id="price"
                        value={price}
                    />
                </div>
                <div className={style.item}>
                    <label htmlFor="Brands">Brands</label>
                    <FilterDropdown
                        categoryId={[brandId, setBrandId]}
                        category={[brand, setBrand]}
                        title={brand}
                        content={brands}
                    />
                </div>
                <div className={style.item}>
                    <label htmlFor="Categories">Categories</label>
                    <FilterDropdown
                        categoryId={[categoryId, setCategoryId]}
                        category={[category, setCategory]}
                        title={category}
                        content={categories}
                    />
                </div>
                <div className={style.item}>
                    <label htmlFor="image">Image</label>
                    <img src={selectedFile} alt="img" />
                    <input
                        onChange={(e) => {
                            handleImage(e);
                        }}
                        type="file"
                        id="image"
                    />
                </div>

                <div className={style.btnHolder}>
                    <div className="col-6 px-4">
                        <GreenButton
                            onclick={onSubmit}
                            innerText="Submit Changes"
                        />
                    </div>
                    <div className="col-6 px-4">
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
