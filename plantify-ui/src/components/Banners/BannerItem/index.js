import cBannerBg from "../../../images/house-plants.png";

import style from "./index.module.scss";

import { GreenButton } from "../../GreenButton/index";

export const BannerItem = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.img}>
                <img src={props.image} alt="banner-bg" />
                <div className={style.content}>
                    <p>{props.content}</p>
                    <div className={style.btnHolder}>
                        <GreenButton innerText="Show more" />
                    </div>
                </div>
            </div>
        </div>
    );
};
