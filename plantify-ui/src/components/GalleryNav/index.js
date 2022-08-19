import { useEffect, useState } from "react";

import style from "./index.module.scss";

export const GalleryNav = (props) => {
    const [tabActive, setTabActive] = useState(true);
    useEffect(() => {
        props.status(tabActive);
    }, [tabActive]);
    return (
        <div className={style.nav}>
            <button
                onClick={() => setTabActive(true)}
                className={
                    tabActive ? `${style.item} ${style.active}` : style.item
                }
            >
                Photo
            </button>
            <button
                onClick={() => setTabActive(false)}
                className={
                    !tabActive ? `${style.item} ${style.active}` : style.item
                }
            >
                Video
            </button>
        </div>
    );
};
