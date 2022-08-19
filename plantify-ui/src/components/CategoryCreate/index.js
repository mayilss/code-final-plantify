import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { GreenButton } from "../GreenButton";

import style from "./index.module.scss";
import { useState } from "react";

export const CategoryCreate = (props) => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const [isActive, setIsActive] = props.state;

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);
        try {
            const res = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL + "/categories",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.log(error);
        }
        setIsActive("category-all");
    };

    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    };
    const handleImage = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(selectedFile);
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
                        placeholder="test"
                    />
                </div>
                <div className={style.item}>
                    <label htmlFor="image">Image</label>
                    <input
                        onChange={(e) => {
                            handleImage(e);
                        }}
                        type="file"
                        id="image"
                    />
                </div>

                <div className={style.btnHolder}>
                    <div className="col-6 px-4">
                        <GreenButton
                            onclick={onSubmit}
                            innerText="Create Category"
                        />
                    </div>
                    <div className="col-6 px-4">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsActive("category-all");
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
