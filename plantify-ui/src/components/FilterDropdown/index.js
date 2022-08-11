import { useRef, useEffect, useState } from "react";
// import { CategoryContext } from "../../contexts";
import style from "./index.module.scss";

export const FilterDropdown = (props) => {
    const [buttonActive, setButtonActive] = useState(false);
    const [categoryId, setCategoryId] = props.categoryId;
    const [category, setCategory] = props.category;

    return (
        <button
            onClick={() => {
                setButtonActive(!buttonActive);
            }}
            className={style.dropdown}
        >
            {props.title}
            <div className={buttonActive ? style.content : "d-none"}>
                <ul>
                    {props.content?.map((item) => {
                        return (
                            <li
                                onClick={() => {
                                    setCategoryId(item.id);
                                    setCategory(item.name);
                                }}
                                key={item.id}
                            >
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </button>
    );
};
