import { useState } from "react";
import { BannerSliderAll } from "../BannerSliderAll";
import { BannerSliderCreate } from "../BannerSliderCreate";
import { BannerSliderEdit } from "../BannerSliderEdit";

export const BannerSliderTab = () => {
    const [isActive, setIsActive] = useState("banner-slider-all");
    const [categoryId, setCategoryId] = useState(null);

    let tab;
    if (isActive === "banner-slider-all") {
        tab = (
            <BannerSliderAll
                id={[categoryId, setCategoryId]}
                state={[isActive, setIsActive]}
            />
        );
    } else if (isActive === "banner-slider-create") {
        tab = <BannerSliderCreate state={[isActive, setIsActive]} />;
    } else if (isActive === "slider-item-edit") {
        tab = (
            <BannerSliderEdit
                id={[categoryId, setCategoryId]}
                state={[isActive, setIsActive]}
            />
        );
    }

    return <div>{tab}</div>;
};
