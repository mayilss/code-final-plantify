import { Logo } from "../../Logo";

import style from "./index.module.scss";

import Instagram from "../../../icons/ig.svg";
import Facebook from "../../../icons/fb.svg";
import Twitter from "../../../icons/tw.svg";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row d-flex align-items-center gy-4">
                    <div className={`col-12 col-sm-6 col-md-4 col-lg-2 ${style.infoWrapper}`}>
                        <Logo width={"90%"} />
                        <div className={style.info}>
                            <p>Müştəri xidməti qaynar xətti:</p>
                            <p>İş saatları: 9:00 - 18:00</p>
                            <p>Tel: +(994) 55 555 00 00</p>
                            <p>Ünvan: Ziya Bünyadov 7021</p>
                            <div className={style.social}>
                                <img src={Instagram} alt="social" />
                                <img src={Facebook} alt="social" />
                                <img src={Twitter} alt="social" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className={style.list}>
                            <h6>Ev bitkiləri</h6>
                            <ul>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className={style.list}>
                            <h6>Çöl bitkiləri</h6>
                            <ul>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className={style.list}>
                            <h6>Ofis bitkiləri</h6>
                            <ul>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className={style.list}>
                            <h6>Güllər</h6>
                            <ul>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                        <div className={style.list}>
                            <h6>Əlaqə</h6>
                            <ul>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                                <li>
                                    <a>Lorem ipsum</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}