import axios from "axios";
import { useEffect, useState } from "react";
import { GreenButton } from "../GreenButton";
import style from "./index.module.scss";

export const ProductsAll = (props) => {
    const [products, setProducts] = useState([]);
    const [isActive, setIsActive] = props.state;
    const [product, setProduct] = props.id;
    const [pageSize, setPageSize] = useState(10);

    const handleProductCreate = () => {
        setIsActive("product-create");
    };
    const handlePageSize = () => {
        if (products.length < pageSize) {
            return;
        }
        setPageSize(pageSize + 5);
    };
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios(
                    process.env.REACT_APP_API_URL +
                        `/products?pageSize=${pageSize}`
                );
                setProducts(res.data);
            } catch (error) {}
        };
        fetchProducts();
    }, [pageSize]);

    const deleteProduct = async (id) => {
        const res = await axios.delete(
            process.env.REACT_APP_API_URL + `/products/${id}`
        );
    };

    return (
        <>
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
                                    <img
                                        src={item.image}
                                        alt="product img"
                                    ></img>
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
            <div className="p-4">
                <GreenButton innerText="Show more" onclick={handlePageSize} />
            </div>
        </>
    );
};
