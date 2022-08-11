import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { GreenButton } from '../../components/GreenButton';
import { TextContent } from "../../components/TextContent";

import style from "./index.module.scss";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    password: yup.string().min(8).required(),
    newPassword: yup.string().min(8).required(),
    newPasswordConfirm: yup.string()
        .test('passwords-match', 'Passwords must match', function (value) { return this.parent.password === value })
}).required();

export const MyAccount = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <div className={style.wrapper}>
            <TextContent title="Hesabım" />
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
                    <label htmlFor="newPassword">
                        Yeni Şifrə
                    </label>
                    <input type="password" id="newPassword" {...register("newPassword")} />
                    <p>{errors.newPassword?.message}</p>
                </div>
                <div className={style.item}>
                    <label htmlFor="newPasswordConfirm">
                        Yeni Şifrəni təsdiqlə
                    </label>
                    <input type="password" id="newPasswordConfirm" {...register("newPasswordConfirm")} />
                    <p>{errors.newPasswordConfirm?.message}</p>
                </div>
                <div className={style.btnHolder}>
                    <GreenButton innerText="Yadda saxla" />
                </div>
            </form>
        </div>
    );
}