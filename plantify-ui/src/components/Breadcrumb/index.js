import { Link } from "react-router-dom";

import style from "./index.module.scss";

export const Breadcrumb = () => {
    return (
        <div className={style.wrapper}>
            <ul className={style.list}>
                <li>
                    <Link className={style.item} to="/">
                        Home <span>&gt;</span>{" "}
                    </Link>
                </li>
                <li>
                    <Link className={style.item} to="/#">
                        {" "}
                        Categories <span>&gt;</span>{" "}
                    </Link>
                </li>
                <li>
                    <Link className={style.item} to="/#">
                        {" "}
                        Subcategories
                    </Link>
                </li>
            </ul>
        </div>
    );
}