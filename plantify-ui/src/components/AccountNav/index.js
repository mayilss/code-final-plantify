import style from "./index.module.scss";

import accIcon from "../../icons/my-account-icon.svg";
import accIconW from "../../icons/my-acc-w.svg";
import orderIcon from "../../icons/order-info-icon.svg";
import orderIconW from "../../icons/orders-w.svg";
import shippingInfoIcon from "../../icons/orders-icon.svg";
import shippingInfoIconW from "../../icons/shipping-info-w.svg";

export const AccountNav = (props) => {
    const [isActive, setIsActive] = props.state;
    const handleAccount = () => { setIsActive("account") }
    const handleOrders = () => { setIsActive("orders") }
    const handleShippingInfo = () => { setIsActive("shipping") }

    return (
        <div className={style.wrapper}>
            <button onClick={() => { handleAccount() }}
                className={isActive === "account" ? style.active : style.item}>
                <img src={isActive === "account" ? accIconW : accIcon} alt="" />
                <p>Hesabım</p>
            </button>
            <button onClick={() => { handleOrders() }}
                className={isActive === "orders" ? style.active : style.item}>
                <img src={isActive === "orders" ? orderIconW : orderIcon} alt="" />
                <p>
                    Sifarişlərim
                </p>
            </button>
            <button onClick={() => { handleShippingInfo() }}
                className={isActive === "shipping" ? style.active : style.item}>
                <img src={isActive === "shipping" ? shippingInfoIconW : shippingInfoIcon} alt="" />
                <p>
                    Göndərmə məlumatları
                </p>
            </button>
        </div>
    );
}