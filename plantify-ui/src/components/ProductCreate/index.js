import axios from "axios";

import { GreenButton } from "../GreenButton";
import { FilterDropdown } from "../FilterDropdown";

import style from "./index.module.scss";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const ProductCreate = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [sku, setSku] = useState("");
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState("Brands");
    const [brandId, setBrandId] = useState(null);
    const [category, setCategory] = useState("Categories");
    const [categories, setCategories] = useState(null);
    const [categoryId, setCategoryId] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const [isActive, setIsActive] = props.state;

    const fetchBrands = async () => {
        return await axios(process.env.REACT_APP_API_URL + `/brands`);
    };
    const fetchCategories = async () => {
        return await axios(process.env.REACT_APP_API_URL + `/categories`);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("sku", sku);
        formData.append("brandId", brandId);
        formData.append("categoryId", categoryId);
        formData.append("image", selectedFile);
        try {
            const res = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL + "/products",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.log(error);
        }
        setIsActive("products-all");
    };

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handlePrice = (e) => {
        setPrice(e.target.value);
    };
    const handleSku = (e) => {
        setSku(e.target.value);
    };
    const handleImage = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const { isLoading } = useQuery(["brands5"], fetchBrands, {
        onSuccess: (data) => {
            setBrands(data.data);
        },
    });

    const { isLoading: isLoading2 } = useQuery(
        ["categories5"],
        fetchCategories,
        {
            onSuccess: (data) => {
                setCategories(data.data);
            },
        }
    );
    if (isLoading && isLoading2) return <div></div>;

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
                    />
                </div>
                <div className={style.item}>
                    <label htmlFor="sku">StockKeepingUnit</label>
                    <input
                        onChange={(e) => {
                            handleSku(e);
                        }}
                        type="text"
                        id="sku"
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
                            innerText="Create Product"
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
