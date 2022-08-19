import axios from "axios";

import { GreenButton } from "../GreenButton";

import style from "./index.module.scss";
import { useState } from "react";

export const BrandEdit = (props) => {
    const [brand, setBrand] = props.id;
    console.log(brand);
    const [name, setName] = useState(brand.name);

    const [isActive, setIsActive] = props.state;

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios({
                method: "put",
                url: process.env.REACT_APP_API_URL + `/brands/${brand.id}`,
                data: { name: name },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        setIsActive("brands-all");
    };

    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    };

    return (
        <div>
            <form encType="true" className={style.form}>
                <div className={style.item}>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={(e) => {
                            handleName(e);
                        }}
                        type="text"
                        id="name"
                        value={name}
                    />
                </div>

                <div className={style.btnHolder}>
                    <div className="col-6 px-4">
                        <GreenButton
                            onclick={onSubmit}
                            innerText="Submit Changes"
                        />
                    </div>
                    <div className="col-6 px-4">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsActive("brands-all");
                            }}
                            className={style.goBtn}
                        >
                            Go to the list
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
