import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { GreenButton } from '../../components/GreenButton';
import { TextContent } from "../../components/TextContent";

import style from "./index.module.scss";

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.number().required(),
    country: yup.string().required(),
    address: yup.string().required()
}).required();

export const ShippingInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <div className={style.wrapper}>
            <TextContent title="Göndərmə məlumatı"/>
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
                    <label htmlFor="phone">Mobil nömrə</label>
                    <input type="text" id="phone" {...register("phone")} />
                    <p>{errors.phone?.message}</p>
                </div>
                <div className={style.item}>
                    <label htmlFor="country">Ölkə</label>
                    <input type="text" id="country" {...register("country")} />
                    <p>{errors.country?.message}</p>
                </div>
                <div className={style.item}>
                    <label htmlFor="address">Ünvan</label>
                    <textarea type="text" id="address" {...register("address")} />
                    <p>{errors.address?.message}</p>
                </div>
                <div className={style.btnHolder}>
                    <GreenButton innerText="Yadda saxla" />
                </div>
            </form>
        </div>
    );
}