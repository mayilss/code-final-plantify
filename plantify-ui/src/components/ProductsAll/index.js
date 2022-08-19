import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import style from "./index.module.scss";

export const ProductsAll = (props) => {
    const [products, setProducts] = useState([]);
    const [isActive, setIsActive] = props.state;
    const [product, setProduct] = props.id;
    const queryClient = useQueryClient();

    const handleProductCreate = () => {
        setIsActive("product-create");
    };

    const fetchProducts = async () => {
        return await axios(process.env.REACT_APP_API_URL + `/products`);
    };

    const deleteProduct = async (id) => {
        const res = await axios.delete(
            process.env.REACT_APP_API_URL + `/products/${id}`
        );
        if (res.status === 200) {
            queryClient.invalidateQueries(["products4"]);
        }
    };

    const { isLoading } = useQuery(["products4"], fetchProducts, {
        onSuccess: (data) => {
            setProducts(data.data);
        },
    });
    if (isLoading) return <div>Loading</div>;

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>
                        <button
                            onClick={() => {
                                handleProductCreate();
                            }}
                            className={style.create}
                        >
                            Create
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>
                                <img src={item.image} alt="product img"></img>
                            </td>
                            <td className={style.actions}>
                                <button
                                    onClick={() => {
                                        setProduct(item);
                                        setIsActive("product-edit");
                                        console.log(product);
                                    }}
                                    className={style.edit}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        setProduct(item.id);
                                        setIsActive("product-details");
                                        console.log(product);
                                    }}
                                    className={style.details}
                                >
                                    Details
                                </button>
                                <button
                                    onClick={() => {
                                        deleteProduct(item.id);
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
