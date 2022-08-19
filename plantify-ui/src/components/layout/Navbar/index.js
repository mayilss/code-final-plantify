import { Link } from "react-router-dom";

import style from "./index.module.scss";

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className="container">
                <ul>
                    <li>
                        <Link className={style.item} to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="/about">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="/delivery-terms">
                            Delivery terms
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="useful-info">
                            Useful info
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="/gallery">
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
