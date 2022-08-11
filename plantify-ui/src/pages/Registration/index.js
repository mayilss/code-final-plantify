import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { GreenButton } from '../../components/GreenButton';
import { TextContent } from "../../components/TextContent";
import { Collage } from "../../components/Collage";

import style from "./index.module.scss";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    password: yup.string().min(8).required(),
    passwordConfirm: yup.string()
        .test('passwords-match', 'Passwords must match', function (value) { return this.parent.password === value })
}).required();

export const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <main className="container my-4">
            <div className="row gy-4">
                <div className="col-md-6 col-12">
                    <TextContent title="Qeydiyyat" />
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.item}>
                            <label htmlFor="name">Ad</label>
                            <input type="text" id="name" {...register("firstName")} />
                            <p>{errors.firstName?.message}</p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="surname">Soyad</label>
                            <input type="text" id="surname" {...register("lastName")} />
                            <p>{errors.lastName?.message}</p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" {...register("email")} />
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="phone">Mobil nömrə</label>
                            <input type="text" id="phone" {...register("phone")} />
                            <p>{errors.phone?.message}</p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="password">Şifrə</label>
                            <input type="password" id="password" {...register("password")} />
                            <p>{errors.password?.message}</p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="passwordConfirm">
                                Şifrəni təsdiqlə
                            </label>
                            <input type="password" id="passwordConfirm" {...register("passwordConfirm")} />
                            <p>{errors.passwordConfirm?.message}</p>
                        </div>
                        <div className={style.btnHolder}>
                            <GreenButton innerText="Hesab Yarat" />
                        </div>
                    </form>
                </div>
                <div className="col-md-6 col-12">
                    <Collage />
                </div>
            </div>
        </main>
    );
}