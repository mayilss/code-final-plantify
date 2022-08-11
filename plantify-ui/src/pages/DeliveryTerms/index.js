import { useState } from "react";

import { TextContent } from "../../components/TextContent/index";
import { Popup } from "../../components/Popup/index";

import style from "./index.module.scss";

import logopic1 from "../../icons/pages-5.svg";
import logopic2 from "../../icons/pages-6.svg";

import deliverypic1 from "../../images/delivery-pic1.png";
import deliverypic2 from "../../images/delivery-pic2.png";

const deliveryPart = {
    title: "Çatdırılma şərtləri",
    description: `"Sifarişinizi bu gün yerləşdirin və biz ən tez zamanda evinizə və ya 
    ofisinizə çatdırılmasını təmin edəcəyik."
    `,
    text: `Əgər seçiminizdə çətinlik çəkirsinizsə , istəklərinizi bizə bildirin - biz sizin istəklərinizə uyğun olan bir neçə seçim təklif edərək sizin üçün ideal bir variantı tapacayıq. Bitkilərin çatdırılması xüsusi vaqonlarda həyata keçirilir və nəqliyyat şərtləri ən yüksək tələblərə cavab verir - sizin sifarişiniz təhlükəsiz şəkildə çatdırılacaq və mütəxəssislərimiz sizə bitkiyə baxım və uyğun bir yer seçimində sizi məlumatlandıracaqlar.`,
};

export const DeliveryTerms = () => {
    const [isActive, setIsActive] = useState("");
    const [isTriggered, setIsTriggered] = useState(false);

    return (
        <main className="container my-4">
            <div className="row gy-4">
                <div className="col-lg-6 col-12">
                    <TextContent
                        color="green"
                        title={deliveryPart.title}
                        description={deliveryPart.description}
                        text={deliveryPart.text}
                    />
                    <div className="row">
                        <div className={`col-6 ${style.content}`}>
                            <img
                                className={style.logo}
                                src={logopic1}
                                alt="text"
                            />
                            <p className={style.text}>
                                100 AZN-dən yuxarı olan sifarişlərin Bakı şəhəri
                                ərazisində çatdırılması pulsuzdur.
                            </p>
                        </div>
                        <div className={`col-6 ${style.content}`}>
                            <img
                                className={style.logo}
                                src={logopic2}
                                alt="text"
                            />
                            <p className={style.text}>
                                Ölkə daxilində çatdırılma müddəti: Bakı şəhəri -
                                2 gün, Regionlar - 4 gün.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="row justify-content-center">
                        <div className={`col-6 ${style.leftPicWrapper}`}>
                            <img
                                className={style.leftPic}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsActive(e.currentTarget.src);
                                    setIsTriggered(true);
                                }}
                                src={deliverypic2}
                                alt=""
                            />
                        </div>
                        <div className={`col-6 ${style.rightPicWrapper}`}>
                            <img
                                className={style.rightPic}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsActive(e.currentTarget.src);
                                    setIsTriggered(true);
                                }}
                                src={deliverypic1}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Popup trigger={isTriggered} img={isActive} handleClose={() => {setIsTriggered(false)}} />
        </main>
    );
}