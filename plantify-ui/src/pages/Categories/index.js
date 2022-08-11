import { useEffect, useState } from "react";

import { FilterDropdown } from "../../components/FilterDropdown";
import { ProductCard } from "../../components/ProductCard";

import loadingGif from "../../icons/loading.gif";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const Categories = () => {
    const [prods, setProds] = useState([]);
    const [categoryId, setCategoryId] = useState(1);
    const [category, setCategory] = useState("House plants");
    const queryClient = useQueryClient();

    const fetchProds = async () => {
        return await axios(
            process.env.REACT_APP_API_URL +
                `/products/CategoryProducts?categoryid=${categoryId}`
        );
    };

    const { isLoading: isLoading2 } = useQuery(
        ["products3", categoryId],
        fetchProds,
        {
            onSuccess: (data) => {
                console.log(data.data);
                setProds(data.data);
            },
        }
    );

    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        return await axios(process.env.REACT_APP_API_URL + "/categories");
    };

    const { isLoading } = useQuery(["categories3"], fetchCategories, {
        onSuccess: (data) => {
            setCategories(data.data);
        },
    });
    const navigate = useNavigate();
    if (isLoading && isLoading2) return <div>Loading</div>;

    return (
        <main className="container my-4">
            <div className="d-flex my-4">
                <FilterDropdown
                    categoryId={[categoryId, setCategoryId]}
                    category={[category, setCategory]}
                    title={category}
                    content={categories}
                />
            </div>
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
                                        // likeHandler={() => handleLike(prodItem)}
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
