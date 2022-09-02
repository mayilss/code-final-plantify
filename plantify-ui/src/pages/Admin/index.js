import { useState } from "react";
import { BannersTab } from "../../components/BannersAdmin/BannersTab";
import { BannerSliderTab } from "../../components/BannerSliderTab";
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
    const handleBannerSlider = () => {
        setIsActive("Banner-Slider");
    };
    const handleBottomBanners = () => {
        setIsActive("BottomBanner");
    };

    let tab;
    switch (isActive) {
        case "Categories":
            tab = <CategoriesTab />;
            break;
        case "Brands":
            tab = <BrandsTab />;
            break;
        case "Products":
            tab = <ProductsTab />;
            break;
        case "Banner-Slider":
            tab = <BannerSliderTab />;
            break;
        case "BottomBanner":
            tab = <BannersTab />;
            break;

        default:
            tab = <CategoriesTab />;
            break;
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
                        <button
                            onClick={() => {
                                handleBannerSlider();
                            }}
                            className={
                                isActive === "Banner-Slider"
                                    ? style.active
                                    : style.item
                            }
                        >
                            <p>Banner Slider</p>
                        </button>
                        <button
                            onClick={() => {
                                handleBottomBanners();
                            }}
                            className={
                                isActive === "BottomBanner"
                                    ? style.active
                                    : style.item
                            }
                        >
                            <p>Bottom Banners</p>
                        </button>
                    </div>
                </div>
                <div className="col-md-8 col-12">{tab}</div>
            </div>
        </main>
    );
};
