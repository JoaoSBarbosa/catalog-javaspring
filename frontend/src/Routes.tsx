
import {NavBar} from "components/Navbar";
import {Admin} from "pages/Admin";
import {Catalog} from "pages/Catalog";
import {Home} from "pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ProductDetails} from "./pages/ProductDetails";

export const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path={"/products"}>
                    <Catalog/>
                </Route>
                <Route path={"/products/:productId"}>
                    <ProductDetails/>
                </Route>
                <Route path={"/admin"}>
                    <Admin/>
                </Route>

            </Switch>
        </BrowserRouter>
    );
};
