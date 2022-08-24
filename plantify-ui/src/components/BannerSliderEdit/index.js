import axios from "axios";

import { GreenButton } from "../GreenButton";

import style from "./index.module.scss";
import { useState } from "react";

export const BannerSliderEdit = (props) => {
    const [categoryId, setCategoryId] = props.id;
    const [content, setContent] = useState(categoryId.content);
    const [selectedFile, setSelectedFile] = useState(categoryId.image);

    const [isActive, setIsActive] = props.state;

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("content", content);
        formData.append("image", selectedFile);
        try {
            const res = await axios({
                method: "put",
                url:
                    process.env.REACT_APP_API_URL +
                    `/home/bannerslider/${categoryId.id}`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (error) {
            console.log(error);
        }
        setIsActive("banner-slider-all");
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };
    const handleImage = (e) => {
        if (e.target.files[0] !== selectedFile) {
            if (e.target.files[0] !== null) {
                setSelectedFile(e.target.files[0]);
            }
        }
        return;
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
                        value={content}
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
                                setIsActive("banner-slider-all");
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
