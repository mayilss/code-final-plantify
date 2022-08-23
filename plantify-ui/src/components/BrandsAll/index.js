import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import style from "./index.module.scss";

export const BrandsAll = (props) => {
    const [brands, setBrands] = useState([]);
    const [isActive, setIsActive] = props.state;
    const [brand, setBrand] = props.id;
    const queryClient = useQueryClient();

    const handleBrandCreate = () => {
        setIsActive("brand-create");
    };

    const fetchBrands = async () => {
        return await axios(process.env.REACT_APP_API_URL + `/brands`);
    };

    const deleteBrand = async (id) => {
        const res = await axios.delete(
            process.env.REACT_APP_API_URL + `/brands/${id}`
        );
        if (res.status === 200) {
            queryClient.invalidateQueries(["brands4"]);
        }
    };

    const { isLoading } = useQuery(["brands4"], fetchBrands, {
        onSuccess: (data) => {
            setBrands(data.data);
        },
    });
    if (isLoading) return <div></div>;

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>
                        <button
                            onClick={() => {
                                handleBrandCreate();
                            }}
                            className={style.create}
                        >
                            Create
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {brands.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td className={style.actions}>
                                <button
                                    onClick={() => {
                                        setBrand(item);
                                        setIsActive("brand-edit");
                                    }}
                                    className={style.edit}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        deleteBrand(item.id);
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
