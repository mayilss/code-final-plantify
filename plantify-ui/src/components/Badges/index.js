import truck from "../../icons/delivery-truck.svg";
import img from "../../icons/image-2.svg";
import guarantee from "../../icons/guarantee.svg";
import smile from "../../icons/happiness.svg";

import style from "./index.module.scss";

export const Badges = () => {
    return (
        <div className="row gy-4 mt-4">
            <div className="col-md-3 col-6">
                <div className={style.content}>
                    <div className={style.badge}>
                        <img src={guarantee} alt="guarantee" />
                    </div>
                    <p>
                        7 gün təzəliyə zəmanət verilir
                    </p>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className={style.content}>
                    <div className={style.badge}>
                        <img src={truck} alt="truck" />
                    </div>
                    <p>Pulsuz çatdırılma</p>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className={style.content}>
                    <div className={style.badge}>
                        <img src={img} alt="plant" />
                    </div>
                    <p>Ən yaxşı çiçəklər</p>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className={style.content}>
                    <div className={style.badge}>
                        <img src={smile} alt="smile" />
                    </div>
                    <p>
                        100% müştəri məmnuniyyəti
                    </p>
                </div>
            </div>
        </div>
    );
}