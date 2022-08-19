import { useState } from "react";
import { BrandsTab } from "../../components/Brands";
import { CategoriesTab } from "../../components/Categories";
import { ProductsTab } from "../../components/Products";
import style from "./index.module.scss";

export const Admin = () => {
    const [isActive, setIsActive] = useState("Categories");
    const handleCategories = () => {
        setIsActive("Categories");
    };
    const handleBrands = () => {
        setIsActive("Brands");
    };
    const handleProducts = () => {
        setIsActive("Products");
    };

    let tab;
    if (isActive === "Categories") {
        tab = <CategoriesTab />;
    } else if (isActive === "Brands") {
        tab = <BrandsTab />;
    } else {
        tab = <ProductsTab />;
    }

    return (
        <main className="container my-4">
            <div className="row gy-4">
                <div className="col-md-4 col-12">
                    <div className={style.wrapper}>
                        <button
                            onClick={() => {
                                handleCategories();
                            }}
                            className={
                                isActive === "Categories"
                                    ? style.active
                                    : style.item
                            }
                        >
                            <p>Categories</p>
                        </button>
                        <button
                            onClick={() => {
                                handleBrands();
                            }}
                            className={
                                isActive === "Brands"
                                    ? style.active
                                    : style.item
                            }
                        >
                            <p>Brands</p>
                        </button>
                        <button
                            onClick={() => {
                                handleProducts();
                            }}
                            className={
                                isActive === "Products"
                                    ? style.active
                                    : style.item
                            }
                        >
                            <p>Products</p>
                        </button>
                    </div>
                </div>
                <div className="col-md-8 col-12">{tab}</div>
            </div>
        </main>
    );
};
