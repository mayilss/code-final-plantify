import { GreenButton } from "../GreenButton";
import style from "./index.module.scss";

export const Bill = () => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Total ödəniş</h2>
            <p className={style.description}>Çatdırılma və vergi:</p>
            <div className="row">
                <p className={`col-6 ${style.content}`}>Çatdırılma:</p>
                <p className={`col-6 ${style.price}`}>4.50 ₼</p>
            </div>
            <div className={`row ${style.contentWrapper}`}>
                <p className={`col-6 ${style.content}`}>Vergi:</p>
                <p className={`col-6 ${style.price}`}>1.20 ₼</p>
            </div>
            <div className="row my-4">
                <p className={`col-6 ${style.contentTotal}`}>Yekun:</p>
                <p className={`col-6 ${style.priceTotal}`}>353.12 ₼</p>
            </div>
            <div className={style.btnHolder}>
                <GreenButton innerText="Sifarişi Təstiqlə" />
            </div>
        </div>
    );
}