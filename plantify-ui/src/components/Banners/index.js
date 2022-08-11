import { BannerItem } from "./BannerItem";

export const Banners = () => {
    return (
        <div className="container mt-4">
            <div className="row gy-3">
                <div className="col-md-4 col-12">
                    <BannerItem />
                </div>
                <div className="col-md-4 col-12">
                    <BannerItem />
                </div>
                <div className="col-md-4 col-12">
                    <BannerItem />
                </div>
            </div>
        </div>
    );
}