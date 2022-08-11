import style from "./index.module.scss"

export const Popup = (props) => {
    return (
        props.trigger ?
            <div className={style.holder}>
                <div className={style.inner}>
                    <img src={props.img} alt="" />
                    <button onClick={props.handleClose} className={style.close}>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </div> : null
    );
}