import style from "./index.module.scss";

import { GreenButton } from "../GreenButton/index";

import campaignBannerBg from "../../images/nonSlider.png";
import campaignCardR from "../../images/campaign-card-2.png";
import campaignCardL from "../../images/campaign-card-1.png";

export const Campaigns = () => {
    return (
        <div className="row gy-4 mt-4">
            <div className="col-md-5 col-12">
                <div className={style.left}>
                    <div className={style.leftImg}>
                        <img src={campaignBannerBg} alt="campaign-banner-bg" />
                        <div className={style.button}>
                            <GreenButton innerText="Show more" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7 col-12">
                <div className="row">
                    <div className="col-6">
                        <div className={style.cardLeft}>
                            <div className={style.cardLeftImg}>
                                <img
                                    src={campaignCardL}
                                    alt="campaign-card-left"
                                />
                                <div className={style.cardLeftContent}>
                                    <p>
                                        DISCOUNTED <br /> PRODUCTS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={style.cardRight}>
                            <div className={style.cardRightImg}>
                                <img
                                    src={campaignCardR}
                                    alt="campaign-card-right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
