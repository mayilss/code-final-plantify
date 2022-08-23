import { useState } from "react";

import { ProductCard } from "../../components/ProductCard";

import loadingGif from "../../icons/loading.gif";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Shop = () => {
    const [prods, setProds] = useState([]);
    console.log(process.env.REACT_APP_API_URL);

    const fetchProds = async () => {
        return await axios(process.env.REACT_APP_API_URL + `/products`);
    };

    const { isLoading: isLoading2 } = useQuery(["products2"], fetchProds, {
        onSuccess: (data) => {
            setProds(data.data);
        },
    });

    const navigate = useNavigate();
    if (isLoading2) return <div></div>;

    return (
        <main className="container my-4">
            {isLoading2 ? (
                <div className="d-flex justify-content-center">
                    <img width={"50rem"} alt="loading" src={loadingGif} />
                </div>
            ) : (
                <div className="row gy-4 my-4">
                    {prods &&
                        prods.map((prodItem) => {
                            return (
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.sessionStorage.setItem(
                                            "details",
                                            JSON.stringify(prodItem)
                                        );
                                        navigate("/details", { replace: true });
                                    }}
                                    key={prodItem.id}
                                    className="col-md-3 col-6"
                                >
                                    <ProductCard
                                        product={prodItem}
                                        img={prodItem.image}
                                        title={prodItem.name}
                                        price={prodItem.price}
                                    />
                                </div>
                            );
                        })}
                </div>
            )}
        </main>
    );
};
