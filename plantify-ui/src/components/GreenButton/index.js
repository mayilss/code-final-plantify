import style from "./index.module.scss"

export const GreenButton = (props) => {
    return(
    <button className={style.btn}>
        {props.innerText}
    </button>
    );
}