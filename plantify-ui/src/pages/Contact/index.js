import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { TextContent } from "../../components/TextContent";

import style from "./index.module.scss";

import phone from "../../icons/phone.svg";
import email from "../../icons/email.svg";
import Instagram from "../../icons/instagram-w.svg";
import Facebook from "../../icons/facebook-w.svg";
import Twitter from "../../icons/twitter-w.svg";
import contactmap from "../../images/contact-map.png";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required()
}).required();

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <main className="container my-4">
            <TextContent color="green" title="Əlaqə" />
            <div className="row gy-4 my-4">
                <div className="col-md-6 col-12">
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.item}>
                            <label htmlFor="name">Ad</label>
                            <input type="text" id="name" {...register("name")} />
                            <p>{errors.name?.message}</p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" {...register("email")} />
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="message">Mesaj</label>
                            <textarea type="text" id="message" {...register("message")} />
                            <p>{errors.message?.message}</p>
                        </div>
                        <div className={style.bottom}>
                            <div className={style.left}>
                                <div className={style.leftItem}>
                                    <img src={phone} alt="" />
                                    <p>+(994) 077 777 77 77</p>
                                </div>
                                <div className={style.leftItem}>
                                    <img src={email} alt="" />
                                    <p>ziragul@gmail.com</p>
                                </div>
                                <div className={style.social}>
                                    <img src={Instagram} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Twitter} alt="" />
                                </div>
                            </div>
                            <div className={style.right}>
                                <button type="submit">Göndər</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 col-12">
                    <a
                        className="contact-map-wrapper "
                        href="https://www.google.com/maps/place/Zir%C9%99+G%C3%BCl%C3%A7%C3%BCl%C3%BCk/@40.417276,50.2617413,17z/data=!4m5!3m4!1s0x403043341a68986b:0x373f447180c4a874!8m2!3d40.417276!4d50.26393"
                    >
                        <img width={"100%"} src={contactmap} alt="" />
                    </a>
                </div>
            </div>
        </main>
    );
}