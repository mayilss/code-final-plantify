import axios from "axios";

import { GreenButton } from "../GreenButton";

import style from "./index.module.scss";
import { useState } from "react";

export const CategoryEdit = (props) => {
    const [categoryId, setCategoryId] = props.id;
    const [name, setName] = useState(categoryId.name);
    const [selectedFile, setSelectedFile] = useState(categoryId.image);

    const [isActive, setIsActive] = props.state;

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);
        console.log(selectedFile);
        try {
            console.log("test");
            const res = await axios({
                method: "put",
                url:
                    process.env.REACT_APP_API_URL +
                    `/categories/${categoryId.id}`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(res);
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
        if (selectedFile === null) {
            return;
        }
        setSelectedFile(e.target.files[0]);
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
                <div className={style.item}>
                    <label htmlFor="image">Image</label>
                    <img src={selectedFile} alt="img" />
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
                            innerText="Submit Changes"
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
