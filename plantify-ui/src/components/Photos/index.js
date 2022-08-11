import Masonry from "react-masonry-css";
import "./index.scss";

import pic1 from "../../images/about-pic1.png";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import partner7 from "../../images/partner7.png";
import deliverypic1 from "../../images/delivery-pic1.png";
import deliverypic2 from "../../images/delivery-pic2.png";

export const Photos = () => {
    return(
        <Masonry
                breakpointCols={3}
                className="my-masonry-grid my-4"
                columnClassName="my-masonry-grid_column">
                {[<img width={"100%"} alt="gallery" src={pic1} />,
                <img width={"100%"} alt="gallery" src={deliverypic1} />,
                <img width={"100%"} alt="gallery" src={deliverypic2} />,
                <img width={"100%"} alt="gallery" src={pic2 } />,
                <img width={"100%"} alt="gallery" src={pic3} />,
                <img width={"100%"} alt="gallery" src={pic4} />,
                <img width={"100%"} alt="gallery" src={pic1} />,
                <img width={"100%"} alt="gallery" src={deliverypic1} />,
                <img width={"100%"} alt="gallery" src={deliverypic2} />,
                <img width={"100%"} alt="gallery" src={pic2 } />,
                <img width={"100%"} alt="gallery" src={pic3} />,
                <img width={"100%"} alt="gallery" src={pic4} />,
                <img width={"100%"} alt="gallery" src={partner7} />]}
            </Masonry>
    );
}