import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Header } from "./components/layout/Header/index";
import { Footer } from "./components/layout/Footer/index";
import { HomePage } from "./pages/HomePage/index";
import { Favorites } from "./pages/Favorites";
import { UsefulInfo } from "./pages/UsefulInfo";
import { AboutUs } from "./pages/AboutUs";
import { DeliveryTerms } from "./pages/DeliveryTerms";
import { Gallery } from "./pages/Gallery";
import { Registration } from "./pages/Registration";
import { Contact } from "./pages/Contact";
import { Signin } from "./pages/Signin";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Details } from "./pages/Details";
import { Account } from "./pages/Account";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartContext, FavoritesContext, SearchContext } from "./contexts";
import { Categories } from "./pages/Categories";
import { SearchResults } from "./pages/SearchResults";
import { Admin } from "./pages/Admin";
const queryClient = new QueryClient();

const favsFromLocalStorage = JSON.parse(
    localStorage.getItem("favorites") || "[]"
);
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

function App() {
    const [query, setQuery] = useState("");

    const [favsArray, setFavsArray] = useState(favsFromLocalStorage);
    useEffect(() => {
        window.localStorage.setItem("favorites", JSON.stringify(favsArray));
    }, [favsArray]);

    const [cartArray, setCartArray] = useState(cartFromLocalStorage);
    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cartArray));
    }, [cartArray]);

    return (
        <CartContext.Provider
            value={{
                cartState: [cartArray, setCartArray],
            }}
        >
            <FavoritesContext.Provider
                value={{
                    favoritesState: [favsArray, setFavsArray],
                }}
            >
                <SearchContext.Provider
                    value={{ searchState: [query, setQuery] }}
                >
                    <QueryClientProvider client={queryClient}>
                        <div className="App">
                            <Header />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="shop" element={<Shop />} />
                                <Route
                                    path="categories"
                                    element={<Categories />}
                                />
                                <Route
                                    path="favorites"
                                    element={<Favorites />}
                                />
                                <Route path="about" element={<AboutUs />} />
                                <Route
                                    path="delivery-terms"
                                    element={<DeliveryTerms />}
                                />
                                <Route
                                    path="useful-info"
                                    element={<UsefulInfo />}
                                />
                                <Route path="gallery" element={<Gallery />} />
                                <Route
                                    path="registration"
                                    element={<Registration />}
                                />
                                <Route path="contact" element={<Contact />} />
                                <Route path="signin" element={<Signin />} />
                                <Route path="cart" element={<Cart />} />
                                <Route path="details" element={<Details />} />
                                <Route path="account" element={<Account />} />
                                <Route
                                    path="searchresults"
                                    element={<SearchResults />}
                                />
                                <Route path="admin" element={<Admin />} />
                            </Routes>
                            <Footer />
                        </div>
                    </QueryClientProvider>
                </SearchContext.Provider>
            </FavoritesContext.Provider>
        </CartContext.Provider>
    );
}

export default App;
