import style from "./index.module.scss";

import { FavoritesContext } from "../../contexts/index";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";

export const Favorites = () => {
    const { favoritesState } = useContext(FavoritesContext);
    const [favsArray, setFavsArray] = favoritesState;
    const navigate = useNavigate();

    useEffect(() => {
        setFavsArray(JSON.parse(window.localStorage.getItem("favorites")));
    }, []);

    return (
        <main className="container my-4">
            <h1 className={style.title}>Seçdiklərim</h1>
            <div className="row g-4">
                {favsArray &&
                    favsArray.map((item) => {
                        return (
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.sessionStorage.setItem(
                                        "details",
                                        JSON.stringify(item)
                                    );
                                    navigate("/details", { replace: true });
                                }}
                                key={item.id}
                                className="col-md-3 col-6"
                            >
                                <ProductCard
                                    product={item}
                                    img={item.image}
                                    title={item.name}
                                    price={item.price}
                                />
                            </div>
                        );
                    })}
            </div>
        </main>
    );
};
