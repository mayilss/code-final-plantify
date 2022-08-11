import { useState } from "react";
import { Popup } from "../Popup";

import style from "./index.module.scss"

import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";

export const Collage = (props) => {
    const [isActive, setIsActive] = useState("");
    const [isTriggered, setIsTriggered] = useState(false);

    return (
        <div className="row align-items-center">
            <div className={`${style.imgWrapper} col-6`}>
                <img
                    className={style.imgs}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsActive(e.currentTarget.src);
                        setIsTriggered(true);

                    }}
                    src={pic2}
                    alt=""
                />
                <img
                    className={style.imgs}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsActive(e.currentTarget.src);
                        setIsTriggered(true);
                    }}
                    src={pic3}
                    alt=""
                />
            </div>
            <div className="col-6">
                <img
                    className={`${style.img3}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsActive(e.currentTarget.src);
                        setIsTriggered(true);
                    }}
                    src={pic4}
                    alt=""
                />

            </div>
            <Popup img={isActive} trigger={isTriggered} handleClose={() => {setIsTriggered(false)}} />
        </div>
    );
}