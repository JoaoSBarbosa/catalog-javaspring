import {NavBar} from "components/Navbar";
import "./styles.css";
import {Pagination} from "../../components/Pagination";
import {Navbar} from "./Navbar";
import {Route, Switch} from "react-router-dom";
import {Products} from "./pages/Products";
import {Users} from "./User";

export const Admin = () => {
    return (
        <div className={"admin-container"}>
            <Navbar/>
            <div className="admin-content">
                <Switch>
                    <Route path={"/admin/products"}>
                        <Products/>
                    </Route>
                    <Route path={"/admin/categories"}>
                        <h1>Categorias CRUD</h1>
                    </Route>
                    <Route path={"/admin/users"}>
                        <Users/>
                    </Route>
                </Switch>
            </div>


        </div>
    );
};
