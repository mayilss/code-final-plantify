import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import style from "./index.module.scss";

export const BannerSliderAll = (props) => {
    const [categories, setCategories] = useState([]);
    const [isActive, setIsActive] = props.state;
    const [categoryId, setCategoryId] = props.id;
    const queryClient = useQueryClient();

    const handleSliderItemCreate = () => {
        setIsActive("banner-slider-create");
    };

    const fetchBannerSlider = async () => {
        return await axios(
            process.env.REACT_APP_API_URL + `/home/bannerslider`
        );
    };

    const deleteSliderItem = async (id) => {
        const res = await axios.delete(
            process.env.REACT_APP_API_URL + `/home/bannerslider/${id}`
        );
        if (res.status === 200) {
            queryClient.invalidateQueries(["bannerslider2"]);
        }
    };

    const { isLoading } = useQuery(["bannerslider2"], fetchBannerSlider, {
        onSuccess: (data) => {
            setCategories(data.data);
        },
    });
    if (isLoading) return <div></div>;

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Content</th>
                    <th>Image</th>
                    <th>
                        <button
                            onClick={() => {
                                handleSliderItemCreate();
                            }}
                            className={style.create}
                        >
                            Create
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {categories.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.content}</td>
                            <td>
                                <img src={item.image} alt="category img"></img>
                            </td>
                            <td className={style.actions}>
                                <button
                                    onClick={() => {
                                        setCategoryId(item);
                                        setIsActive("slider-item-edit");
                                        console.log(categoryId);
                                    }}
                                    className={style.edit}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        deleteSliderItem(item.id);
                                    }}
                                    className={style.delete}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
