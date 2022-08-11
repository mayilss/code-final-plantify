import uiPic1 from "../../images/ui-pic1.png";
import uiPic2 from "../../images/ui-pic2.png";
import uiPic3 from "../../images/ui-pic3.png";

import style from "./index.module.scss";

import { TextContent } from "../../components/TextContent";

const a = {
    title: `Seramik Məhsullar`,
    text: `Bitkinin sağlamlığı, əsasən evin yerləşdiyi yerə və ya
    onların saxlanma şəraitinə deyil, həm də onun yetişdiyi
    dibçəyə bağlıdır. Rahat inkişaf üçün ən düzgün həll -
    ekoloji cəhətdən səmərəli materiallardan hazırlanan və
    köklər üçün ən uyğun vasitə olan keramik dibçəkdir. Hər
    bir insanın zövqünə oxşayan incə gül qablarının ən böyük
    çeşidini sizə təqdim edirik. Düzgün seçilmiş dibçək
    interyerinizə xüsusi bir gözəllik qatacaq.`
}
const b = {
    title: `Bitkilərin baxımı`,
    text: `Təbiətə yaxın olaraq bitkilərin dilini öyrənin. Şəhərin
    tam mərkəzində öz oazisinizi yaradın. Siz orada gündəlik
    təlaş və problemlərdən gizlənə bilərsiniz. Özünüzə
    yaşıllıq ilə dolu bir künc bəxş edin və günlərinizi
    rahatlıq ilə doldurun. Suvarma və drenaj: Drenajı
    yaxşılaşdırmaq və çürüyən kökləri aradan qaldırmaq üçün
    dibçəyin alt hissəsini genişlənmiş gil və ya kiçik
    çınqıllarla doldurun; Təmizlənmiş və filtr olunmuş sudan
    istifadə edin: suda olan əhəng bitkiyə zərər verə bilər;`
}
const c = {
    title: `Düzgün bitkini necə seçmək lazımdır?`,
    text: ` Bir ev bitkisini satın almaqdan əvvəl onu harda
    yerləşdirmək istədiyinizi əvvəldən müəyyən etməyi
    məsləhət görürük. Əgər sizdə günəş işığına məruz qalan
    pəncərə və ya eyvan yoxdursa, siz kölgə sevən bitkilər
    seçiminə üz tutun - kliviya, begoniya, anturium,
    spatifillum, filodendron, aqlaoneme, monstera, draçene
    və ya fikus ağacı növləri. Əgər evinizdə işıq çoxdursa o
    zaman aloe, vaşınqtoniya, amber çiçəyi, dieffenbaxiya,
    jasmin, ətirşah, kalanhoye kimi bitkilərə diqqət yetirə
    bilərsiniz. Bitki saxlamağın ən əsas şərtlərindən biri -
    məkandır. Böyük ofis və ya ev üçün ideal olan bitkilər:
    sansevieriya, zmiokulkas, hoveya, fatsia, abutilon,
    kroton və ya qıcı bitkisidir. Kiçik bir mənzil üçün isə
    bənövşə, kislitsa, streptokarpus, milad kaktusu,
    orxideya və falenopsis kimi bitkilərlə başlamaq daha
    məqsədə uyğundur.`
}

export const UsefulInfo = () => {
    return (
        <div className="container my-4">
            <h1 className={style.title}>Faydalı Məlumat</h1>
            <div className="row my-4 gy-4">
                <div className="col-md-6 order-md-2 col-12">
                    <TextContent
                        title={a.title}
                        text={a.text}
                        button />
                </div>
                <div className="col-md-5 order-md-1 col-12">
                    <img className="p-2" width="100%" src={uiPic1} alt="" />
                </div>
            </div>
            <div className="row my-4 gy-4">
                <div className="col-md-6 col-12">
                    <TextContent
                        title={b.title}
                        text={b.text}
                        button />
                </div>
                <div className="col-md-5 col-12">
                    <img className="p-2" width="100%" src={uiPic2} alt="" />
                </div>
            </div>
            <div className="row gy-4 my-4">
                <div className="col-md-6 order-md-2 col-12">
                <TextContent 
                        title={c.title}
                        text={c.text}
                        button/>
                </div>
                <div className="col-md-5 order-md-1 col-12">
                    <img className="p-2" width="100%" src={uiPic3} alt="" />
                </div>
            </div>
        </div>
    );
}