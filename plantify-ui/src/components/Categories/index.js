import { useState } from "react";
import { CategoryAll } from "../CategoryAll";
import { CategoryCreate } from "../CategoryCreate";
import { CategoryEdit } from "../CategoryEdit";

export const CategoriesTab = () => {
    const [isActive, setIsActive] = useState("category-all");
    const [categoryId, setCategoryId] = useState(null);

    let tab;
    if (isActive === "category-all") {
        tab = (
            <CategoryAll
                id={[categoryId, setCategoryId]}
                state={[isActive, setIsActive]}
            />
        );
    } else if (isActive === "category-create") {
        tab = <CategoryCreate state={[isActive, setIsActive]} />;
    } else if (isActive === "category-edit") {
        tab = (
            <CategoryEdit
                id={[categoryId, setCategoryId]}
                state={[isActive, setIsActive]}
            />
        );
    }

    return <div>{tab}</div>;
};
