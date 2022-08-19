import style from "./index.module.scss";

export const GreenButton = (props) => {
    return (
        <button onClick={props.onclick} type="submit" className={style.btn}>
            {props.innerText}
        </button>
    );
};
