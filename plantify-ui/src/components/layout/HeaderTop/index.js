import { Link } from "react-router-dom";

import style from "./index.module.scss"

import truck from "../../../icons/delivery-truck.svg"
import phone from "../../../icons/phone.svg"
import fb from "../../../icons/facebook-w.svg"
import ig from "../../../icons/instagram-w.svg"
import tw from "../../../icons/twitter-w.svg"

export const HeaderTop = () => {
    return (<div className={style.headerTop}>
        <div className="container">
            <div className="row">
                <div className={`col-md-4 col-sm-6 ${style.left}`}>
                    <div className={style.leftItem}>
                        <img src={truck} alt="truckIcon" />
                        <p>Çatdırılma xidməti</p>
                    </div>
                    <div className={style.leftItem}>
                        <img src={phone} alt="phoneIcon" />
                        <p>+(994)077 777 77 77</p>
                    </div>
                </div>
                <div className={`col-md-4 ${style.mid}`}>
                    <img src={ig} alt="link to instagram page" />
                    <img src={fb} alt="link to facebook page" />
                    <img src={tw} alt="link to twitter page" />
                </div>
                <div className={`col-md-4 col-sm-6 col-12 ${style.right}`}>
                    <Link to="/signin">Sign In</Link>
                    <span>&nbsp;or&nbsp;</span>
                    <Link to="/registration">Create Account</Link>
                </div>
            </div>
        </div>
    </div>);
}