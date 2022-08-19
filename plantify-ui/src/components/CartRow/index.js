import { useContext, useEffect, useState } from "react";

import deleteIcon from "../../icons/b-delete.svg";
import plus from "../../icons/plus.svg";
import minus from "../../icons/minus.svg";

import style from "./index.module.scss";
import { CartContext } from "../../contexts";

export const CartRow = (props) => {
    const { cartState } = useContext(CartContext);
    const [cartArray, setCartArray] = cartState;

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const updatedProducts = cartArray.map((p) => {
            if (p.id === props.product.id) {
                p.quantity = quantity;
                return p;
            } else {
                return p;
            }
        });
        window.localStorage.setItem("cart", JSON.stringify(updatedProducts));
    }, [quantity]);

    const handleDecrement = () => {
        if (quantity <= 1) {
            return;
        }
        setQuantity(quantity - 1);
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleDelete = (product) => {
        if (JSON.stringify(cartArray).includes(JSON.stringify(product))) {
            const newProds = cartArray.filter((filteredProduct) => {
                return filteredProduct.id != product.id;
            });
            setCartArray(newProds);
        } else {
            return;
        }
    };

    return (
        <tr className={style.row}>
            <td>
                <img src={props.image} alt="flower" />
            </td>
            <td>
                <h2 className={style.title}>{props.name}</h2>
                <p className={style.brand}>{props.brand}</p>
            </td>
            <td>
                <p className={style.price}>{props.price + " ₼"}</p>
            </td>
            <td>
                <div className={style.quantity}>
                    <button
                        onClick={() => {
                            handleDecrement();
                        }}
                    >
                        <img src={minus} alt="" />
                    </button>
                    <p>{quantity}</p>
                    <button
                        onClick={() => {
                            handleIncrement();
                        }}
                    >
                        <img src={plus} alt="" />
                    </button>
                </div>
            </td>
            <td className={style.last}>
                <p className={style.price}>{props.price * quantity + " ₼"}</p>
                {props.setTotalPrice(props.price * quantity)}
                <button
                    onClick={() => {
                        handleDelete(props.product);
                    }}
                >
                    <img src={deleteIcon} alt="" />
                </button>
            </td>
        </tr>
    );
};
