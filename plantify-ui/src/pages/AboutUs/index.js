import style from "./index.module.scss";

import { TextContent } from "../../components/TextContent/index";
import { Collage } from "../../components/Collage";

import pic1 from "../../images/about-pic1.png";

import partner1 from "../../images/partner1.png";
import partner2 from "../../images/partner2.png";
import partner3 from "../../images/partner3.png";
import partner4 from "../../images/partner4.png";
import partner5 from "../../images/partner5.png";
import partner6 from "../../images/partner6.png";
import partner7 from "../../images/partner7.png";
import partner8 from "../../images/partner8.png";
import partner9 from "../../images/partner9.png";
import partner10 from "../../images/partner10.png";


const topPart = {
    title: "Haqqimizda",
    text: `Abşeron yarımadası, qədim dövrlərdən bəri müxtəlif kənd təsərrüfatı, qovun bitkiləri, taxıl və bağ bitkiləri becərilən münbit torpaqları ilə məşhurdur. Eyni zamanda, çiçəkçilik, bitki yetişdirilməsi və seçilməsi sahəsində əsas yerlərdən birini məhz Abşeron yarmadası tutur.

    Məqsədimiz - bazarda liderlik mövqeyinə sahib olmaq, müştərilərimizin ehtiyaclarını ödəmək, bitkilər və dizayn, bağlar, bağ sahələri, biznes ofisləri, nigah mərasimləri və digər tədbirlərin keçirilməsi üçün yüksək keyfiyyətli xidmət göstərməkdir. Həmçinin MDB ölkələrinə (Rusiya, Gürcüstan, Özbəkistan, Qazaxıstan), eləcə də Türkiyə və digər yaxın ölkələrə malların geniş miqyaslı ixracını başlatmaq əsas məqsədlərimizdəndir.
    
    Kompleksin ümumi sahəsi 18 hektardır və 6 hissədən ibarətdir. Hər bir hissəsində toxum və fidan, qapalı və açıq bitkilər becərilən kompleksdə xüsusi qayğıya ehtiyacı olan bitkilər müalicə olunur. Burada həm yerli mühit üçün ənənəvi olan çiçək bitkiləri, həm də xaricdən gətirilən və region üçün nadir olan bitkilər yetişdirilir. Bundan əlavə, burada 350-dən çox bitki növü yetişdirilir. Hazırda müəssisənin istehsal gücü ildə 1,6 milyon bitki və çiçək yetişdirməyə qadirdir. Bizim çiçəklərimiz, çalılar, dekorativ və meyvə ağacları, xüsusi satış mərkəzlərimizdən alına və ya sifariş verilə bilər.`,
};
const midPart = {
    title: "Niyə məhz biz?",
    text: `Bitki yetişdirilməsində ixtisaslaşan digər şirkətlər üzərində bir sıra mübahisəli üstünlüklərimiz var:

    Bitkilərimizi özümüz yetişdirdiyimizə görə qiymətlərimiz aşağıdır;
    Biz müasir və ekoloji cəhətdən səmərəli becərmə texnologiyası, həmçinin insanlar üçün ən təhlükəsiz olan gübrə və bitkilərindən istifadə edirik;
    Vasitəçilər və digər ara əlaqələri olmadan məhsullarımız öz zəncirimiz vasitəsilə satılır və bu da öz növbəsində qiymətlərimizə müsbət təsir göstərməkdədir;
    Biz istehsal etdiyimiz məhsullar üçün uzunmüddətli zəmanət veririk və müştərilərə satış sonrası xidmət təqdim edirik.
    Yaxın gələcəkdə özümüzü təmsil edərək, maksimum sayda insanlar tərəfindən tanınıb, bir çox müştəri və tərəfdaşları tərəfimizə cəlb etmək istəyirik.
    
    Bundan əlavə, ekibana yapon incəsənətinin incəliklərini öyrənmək istəyən hər kəs üçün master-klass təşkil etmək, habelə təzə çiçəklərdən bəzək və zərgərlik yaratmaq planlaşdırırıq.
    
    Uzunmüddətli perspektivdə xarici mütəxəssislərlə peşəkar təcrübə mübadiləsi aparmaq, eləcə də Azərbaycan floristlərinin uğurlarını və nailiyyətlərini nümayiş etdirmək üçün beynəlxalq gül sərgilərində iştirak etməyi planlaşdırırıq.`,
};

export const AboutUs = () => {

    return (
        <main className="container my-4">
            <div className="row gy-4">
                <div className="col-lg-6 order-lg-2 col-12">
                    <TextContent
                        title={topPart.title}
                        text={topPart.text}
                        color="green"
                    />
                </div>
                <div className="col-lg-6 order-lg-1 col-12">
                    <img width={"100%"} className="about-img" src={pic1} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12 pt-5">
                    <TextContent
                        color="green"
                        title={midPart.title}
                        text={midPart.text}
                    />
                </div>
                <div className="col-lg-6 col-12">
                    <Collage/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 py-5">
                    <TextContent
                        color="green"
                        title="Bizim Partnyorlarımız"
                    />
                </div>
            </div>
            <div className={style.partners}>
                <img className={style.partner} alt="partner" src={partner1} />
                <img className={style.partner} alt="partner" src={partner2} />
                <img className={style.partner} alt="partner" src={partner3} />
                <img className={style.partner} alt="partner" src={partner4} />
                <img className={style.partner} alt="partner" src={partner5} />
                <img className={style.partner} alt="partner" src={partner6} />
                <img className={style.partner} alt="partner" src={partner7} />
                <img className={style.partner} alt="partner" src={partner8} />
                <img className={style.partner} alt="partner" src={partner9} />
                <img className={style.partner} alt="partner" src={partner10} />
            </div>
        </main>
    );
}