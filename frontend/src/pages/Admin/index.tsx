import {NavBar} from "components/Navbar";
import "./styles.css";
import {Pagination} from "../../components/Pagination";
import {Navbar} from "./Navbar";
import {Switch} from "react-router-dom";
import {Products} from "./pages/Products";
import {Users} from "./User";
import PrivateRoute from "../../components/PrivateRouter";

export const Admin = () => {
    return (
        <div className={"admin-container"}>
            <Navbar/>
            <div className="admin-content">
                <Switch>
                    <PrivateRoute path={"/admin/products"}>
                        <Products/>
                    </PrivateRoute>
                    <PrivateRoute path={"/admin/categories"}>
                        <h1>Categorias CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path={"/admin/users"} roles={["ROLE_ADMIN"]}>
                        <Users/>
                    </PrivateRoute>
                </Switch>
            </div>


        </div>
    );
};
