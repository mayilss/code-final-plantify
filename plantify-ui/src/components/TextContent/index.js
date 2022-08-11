import style from "./index.module.scss";

import { GreenButton } from "../GreenButton";

export const TextContent = (props) => {
    return (
        <>
            {props.title && <h2 className={ props.color === "green" ? style.title : style.subTitle}>{props.title}</h2>}
            {props.description &&
                <h5 className={style.description}>
                    {props.description}
                </h5>}
            {props.text && <p className={style.text}>{props.text}</p>}
            {props.button && <div className={style.btnHolder}><GreenButton innerText="Ətraflı" /></div>}
        </>
    );
}