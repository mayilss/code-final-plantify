import { useContext, useEffect, useState } from "react";

import { Bill } from "../../components/Bill";
import { TextContent } from "../../components/TextContent";
import { CartRow } from "../../components/CartRow";

import style from "./index.module.scss";
import { CartContext } from "../../contexts";

export const Cart = () => {
    const { cartState } = useContext(CartContext);
    const [cartArray, setCartArray] = cartState;
    const [totalPrice, setTotalPrice] = useState(0);
    const [allTotalPrice, setAllTotalPrice] = useState(0);

    useEffect(() => {
        setCartArray(JSON.parse(window.localStorage.getItem("cart")));
    }, []);

    const handleClear = () => {
        setCartArray([]);
    };

    useEffect(() => {
        setAllTotalPrice(allTotalPrice + totalPrice);
        console.log("all", allTotalPrice);
    }, [totalPrice]);

    return (
        <main className="container mt-4">
            <TextContent title="Alış-veriş səbəti" />
            <div className="row my-4">
                <div className="col-12 col-md-8">
                    <table className={style.table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Qiymət</th>
                                <th>Miqdar</th>
                                <th>Cəm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartArray.map((item) => {
                                return (
                                    <CartRow
                                        key={item.id}
                                        product={item}
                                        image={item.image}
                                        price={item.price}
                                        brand={item.brand}
                                        quantity={item.quantity}
                                        setTotalPrice={setTotalPrice}
                                        totalPrice={totalPrice}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                        <button
                            onClick={() => {
                                handleClear();
                            }}
                            className={style.clearBtn}
                        >
                            Səbəti təmizlə
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <Bill />
                </div>
            </div>
        </main>
    );
};
