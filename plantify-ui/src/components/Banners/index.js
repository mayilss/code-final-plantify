import { BannerItem } from "./BannerItem";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Banners = () => {
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        return await axios(
            process.env.REACT_APP_API_URL + `/home/bottombanner`
        );
    };
    const { isLoading } = useQuery(["banners"], fetchItems, {
        onSuccess: (data) => {
            setItems(data.data);
        },
    });
    if (isLoading) return <div></div>;

    return (
        <div className="container mt-4">
            <div className="row gy-3">
                {items.map((item) => {
                    return (
                        <div className="col-md-4 col-12">
                            <BannerItem
                                image={item.image}
                                content={item.content}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
