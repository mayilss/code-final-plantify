import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useState } from "react";
import { Link } from "react-router-dom";
import { TextContent } from "../../components/TextContent";
import { GreenButton } from "../../components/GreenButton";

import style from "./index.module.scss";

import eye from "../../icons/eye.svg";
import eyeSlash from "../../icons/eye-slash.svg";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
}).required();

export const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState();
    const handlePasswordChange = (evnt) => {
        evnt.preventDefault();
        setPasswordInput(evnt.target.value);
        console.log(passwordInput)
    };
    const togglePassword = (evnt) => {
        evnt.preventDefault();
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };

    return (
        <main className="container my-4">
            <TextContent title="Giriş" />
            <div className="row gy-4 ">
                <div className="col-sm-6 col-12">
                    <TextContent description="Bir hesabınız varsa, e-posta adresinizle oturum açın." />
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.item}>
                            <label htmlFor="Email">Email</label>
                            <input type="email" id="Email" {...register('email')} />
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className={style.item}>
                            <label htmlFor="Password">Password</label>
                            <input
                                type={passwordType}
                                onChange={handlePasswordChange}
                                value={passwordInput}
                                name="password"
                                {...register('password')}
                            />
                            <p>{errors.password?.message}</p>
                            <button onClick={togglePassword}>
                                {passwordType === "password" ? (
                                    <img
                                        className={style.icon}
                                        src={eye}
                                        alt="icon"
                                    />
                                ) : (
                                    <img
                                        className={style.icon}
                                        src={eyeSlash}
                                        alt="icon"
                                    />
                                )}
                            </button>
                        </div>
                        <div className={style.btnHolder}>
                            <GreenButton innerText="Daxil ol" />
                        </div>
                    </form>
                </div>
                <div className="col-sm-6 col-12">
                    <TextContent description="Hesab yaratmağın bir çox faydası var: daha sürətli
                        yoxlayın, birdən çox ünvan saxlayın, sifarişləri izləyin
                        və s." />
                    <Link to="/registration">
                        <div className={style.btnHolder}>
                            <GreenButton innerText="Hesab yarat" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}