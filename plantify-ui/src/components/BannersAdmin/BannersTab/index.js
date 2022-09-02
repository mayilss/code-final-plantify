import { useState } from "react";
import { BannersAll } from "../BannersAll";
import { BannersCreate } from "../BannersCreate";
import { BannersEdit } from "../BannersEdit";

export const BannersTab = () => {
    const [isActive, setIsActive] = useState("bottombanner-all");
    const [categoryId, setCategoryId] = useState(null);

    let tab;
    if (isActive === "bottombanner-all") {
        tab = (
            <BannersAll
                id={[categoryId, setCategoryId]}
                state={[isActive, setIsActive]}
            />
        );
    } else if (isActive === "bottombanner-create") {
        tab = <BannersCreate state={[isActive, setIsActive]} />;
    } else if (isActive === "bottombanner-edit") {
        tab = (
            <BannersEdit
                id={[categoryId, setCategoryId]}
                state={[isActive, setIsActive]}
            />
        );
    }

    return <div>{tab}</div>;
};
