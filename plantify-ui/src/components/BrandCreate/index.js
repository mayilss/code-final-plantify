import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { GreenButton } from "../GreenButton";

import style from "./index.module.scss";
import { useState } from "react";

export const BrandCreate = (props) => {
    const [name, setName] = useState("");

    const [isActive, setIsActive] = props.state;

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL + "/brands",
                data: { name: name },
            });
        } catch (error) {
            console.log(error);
        }
        setIsActive("brands-all");
    };

    const handleName = (e) => {
        setName(e.target.value);
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
                        placeholder="Name"
                    />
                </div>

                <div className={style.btnHolder}>
                    <div className="col-6 px-4">
                        <GreenButton
                            onclick={onSubmit}
                            innerText="Create Brand"
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
