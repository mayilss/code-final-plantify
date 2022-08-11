import { HeaderTop } from "../HeaderTop/index"
import { Search } from "../Search/index";
import { CategorySlider } from "../CategorySlider/index";
import { Navbar } from "../Navbar";

export const Header = () => {
    return (<header>
        <HeaderTop />
        <Search/>
        <Navbar/>
        <CategorySlider/>
    </header>);
}