import { useState } from "react";
import { BrandCreate } from "../BrandCreate";
import { BrandEdit } from "../BrandEdit";
import { BrandsAll } from "../BrandsAll";

export const BrandsTab = () => {
    const [isActive, setIsActive] = useState("brands-all");
    const [brand, setBrand] = useState(null);

    let tab;
    if (isActive === "brands-all") {
        tab = (
            <BrandsAll id={[brand, setBrand]} state={[isActive, setIsActive]} />
        );
    } else if (isActive === "brand-create") {
        tab = <BrandCreate state={[isActive, setIsActive]} />;
    } else if (isActive === "brand-edit") {
        tab = (
            <BrandEdit id={[brand, setBrand]} state={[isActive, setIsActive]} />
        );
    }

    return <div>{tab}</div>;
};
