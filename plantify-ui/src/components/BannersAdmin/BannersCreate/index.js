import axios from "axios";

import { GreenButton } from "../../GreenButton";

import style from "./index.module.scss";
import { useState } from "react";

export const BannersCreate = (props) => {
    const [content, setContent] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const [isActive, setIsActive] = props.state;

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("content", content);
        formData.append("image", selectedFile);
        try {
            const res = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL + "/home/bottombanner",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.log(error);
        }
        setIsActive("bottombanner-all");
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };
    const handleImage = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div>
            <form encType="true" className={style.form}>
                <div className={style.item}>
                    <label htmlFor="content">Content</label>
                    <input
                        onChange={(e) => {
                            handleContent(e);
                        }}
                        type="text"
                        id="name"
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
                            innerText="Create Banner Item"
                        />
                    </div>
                    <div className="col-6 px-4">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsActive("bottombanner-all");
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
