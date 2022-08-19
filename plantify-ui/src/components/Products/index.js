import { useState } from "react";
import { ProductsAll } from "../ProductsAll";
import { ProductCreate } from "../ProductCreate";
import { ProductEdit } from "../ProductEdit";
import { ProductDetails } from "../ProductDetails";

export const ProductsTab = () => {
    const [isActive, setIsActive] = useState("products-all");
    const [product, setProduct] = useState(null);

    let tab;
    if (isActive === "products-all") {
        tab = (
            <ProductsAll
                id={[product, setProduct]}
                state={[isActive, setIsActive]}
            />
        );
    } else if (isActive === "product-create") {
        tab = <ProductCreate state={[isActive, setIsActive]} />;
    } else if (isActive === "product-edit") {
        tab = (
            <ProductEdit
                id={[product, setProduct]}
                state={[isActive, setIsActive]}
            />
        );
    } else if (isActive === "product-details") {
        tab = (
            <ProductDetails
                id={[product, setProduct]}
                state={[isActive, setIsActive]}
            />
        );
    }

    return <div>{tab}</div>;
};
