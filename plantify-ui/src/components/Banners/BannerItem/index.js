import cBannerBg from "../../../images/house-plants.png";

import style from "./index.module.scss";

import { GreenButton } from "../../GreenButton/index";

export const BannerItem = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.img}>
                <img src={cBannerBg} alt="banner-bg" />
                <div className={style.content}>
                    <p>Müxtəlif növ bitki çeşidləri</p>
                    <div className={style.btnHolder}>
                        <GreenButton innerText="Ətraflı" />
                    </div>
                </div>
            </div>
        </div>
    );
}