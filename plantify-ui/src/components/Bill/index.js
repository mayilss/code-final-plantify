import { GreenButton } from "../GreenButton";
import style from "./index.module.scss";

export const Bill = () => {
    let total = JSON.parse(localStorage.getItem("cart")).reduce(
        (total, acc) => {
            return total + acc.quantity * acc.price;
        },
        0
    );

    return (
        <div className={style.wrapper}>
            <div className="row my-4">
                <p className={`col-6 ${style.contentTotal}`}>Yekun:</p>
                <p className={`col-6 ${style.priceTotal}`}>{total + "₼"}</p>
            </div>
            <div className={style.btnHolder}>
                <GreenButton innerText="Sifarişi Təstiqlə" />
            </div>
        </div>
    );
};
