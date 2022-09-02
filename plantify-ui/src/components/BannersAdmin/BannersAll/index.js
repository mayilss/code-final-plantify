import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import style from "./index.module.scss";

export const BannersAll = (props) => {
    const [categories, setCategories] = useState([]);
    const [isActive, setIsActive] = props.state;
    const [categoryId, setCategoryId] = props.id;
    const queryClient = useQueryClient();

    const handleItemCreate = () => {
        setIsActive("bottombanner-create");
    };

    const fetchItems = async () => {
        return await axios(
            process.env.REACT_APP_API_URL + `/home/bottombanner`
        );
    };

    const deleteItem = async (id) => {
        const res = await axios.delete(
            process.env.REACT_APP_API_URL + `/home/bottombanner/${id}`
        );
        if (res.status === 200) {
            queryClient.invalidateQueries(["bottombanner2"]);
        }
    };

    const { isLoading } = useQuery(["bottombanner2"], fetchItems, {
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
                                handleItemCreate();
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
                                        setIsActive("bottombanner-edit");
                                        console.log(categoryId);
                                    }}
                                    className={style.edit}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        deleteItem(item.id);
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
