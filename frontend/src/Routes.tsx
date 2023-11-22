import {NavBar} from "components/Navbar";
import {Admin} from "pages/Admin";
import {Catalog} from "pages/Catalog";
import {Home} from "pages/Home";
import {Router, Redirect, Route, Switch} from "react-router-dom";
import {ProductDetails} from "./pages/ProductDetails";
import {Auth} from "./pages/Admin/Auth";
import history from "util/history"

export const Routes = () => {
    return (
        <Router history={history}>
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
                <Redirect exact from={"/admin/auth"} to={"/admin/auth/login"}/>
                <Route path={"/admin/auth"}>
                    <Auth/>
                </Route>
                <Redirect exact from={"/admin"} to={"/admin/products"}/>
                <Route path={"/admin"}>
                    <Admin/>
                </Route>

            </Switch>
        </Router>
    );
};
