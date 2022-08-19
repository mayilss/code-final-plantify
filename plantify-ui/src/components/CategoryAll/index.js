import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import style from "./index.module.scss";

export const CategoryAll = (props) => {
    const [categories, setCategories] = useState([]);
    const [isActive, setIsActive] = props.state;
    const [categoryId, setCategoryId] = props.id;
    const queryClient = useQueryClient();

    const handleCategoryCreate = () => {
        setIsActive("category-create");
    };

    const fetchCategories = async () => {
        return await axios(process.env.REACT_APP_API_URL + `/categories`);
    };

    const deleteCategory = async (id) => {
        const res = await axios.delete(
            process.env.REACT_APP_API_URL + `/categories/${id}`
        );
        if (res.status === 200) {
            queryClient.invalidateQueries(["categories4"]);
        }
    };

    const { isLoading } = useQuery(["categories4"], fetchCategories, {
        onSuccess: (data) => {
            setCategories(data.data);
        },
    });
    if (isLoading) return <div>Loading</div>;

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>
                        <button
                            onClick={() => {
                                handleCategoryCreate();
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
                            <td>{item.name}</td>
                            <td>
                                <img src={item.image} alt="category img"></img>
                            </td>
                            <td className={style.actions}>
                                <button
                                    onClick={() => {
                                        setCategoryId(item);
                                        setIsActive("category-edit");
                                        console.log(categoryId);
                                    }}
                                    className={style.edit}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        deleteCategory(item.id);
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
