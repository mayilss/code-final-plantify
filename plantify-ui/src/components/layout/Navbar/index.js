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
                            Haqqımızda
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="/delivery-terms">
                            Çatdırılma şərtləri
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="useful-info">
                            Faydalı məlumatlar
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="/gallery">
                            Foto/Video
                        </Link>
                    </li>
                    <li>
                        <Link className={style.item} to="/contact">
                            Əlaqə
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
