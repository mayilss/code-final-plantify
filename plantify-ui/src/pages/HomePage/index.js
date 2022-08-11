import { useState } from "react";

import { Bannerslider } from "../../components/BannerSlider/index";
import { Badges } from "../../components/Badges/index";
import { Campaigns } from "../../components/Campaigns";
import { Banners } from "../../components/Banners";
import { GreenButton } from "../../components/GreenButton";
import { ProductCard } from "../../components/ProductCard";

import map from "../../images/map.png";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const HomePage = () => {
    const [prods, setProds] = useState([]);

    const fetchProds = async () => {
        return await axios(
            process.env.REACT_APP_API_URL + "/products?pageSize=4"
        );
    };

    const { isLoading } = useQuery(["products"], fetchProds, {
        onSuccess: (data) => {
            setProds(data.data);
            console.log(data.data);
        },
    });

    const navigate = useNavigate();

    if (isLoading) return <div>Loading</div>;
    return (
        <main className="container text-center">
            <Bannerslider />
            <Badges />
            <Campaigns />
            <div className="row gy-4 my-4">
                {prods.map((prodItem) => {
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
                                // likeHandler={() => handleLike(prodItem)}
                            />
                        </div>
                    );
                })}
            </div>
            <div style={{ width: "20rem", margin: "auto" }}>
                <Link to="shop">
                    <GreenButton innerText="Hamısına bax" />
                </Link>
            </div>
            <Banners />
            <a
                className="mt-3"
                href="https://www.google.com/maps/place/Zir%C9%99+G%C3%BCl%C3%A7%C3%BCl%C3%BCk/@40.417276,50.2617413,17z/data=!3m1!4b1!4m5!3m4!1s0x403043341a68986b:0x373f447180c4a874!8m2!3d40.417276!4d50.26393"
            >
                <img width={"100%"} src={map} alt="" />
            </a>
        </main>
    );
};
