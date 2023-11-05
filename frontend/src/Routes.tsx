// import { BrowserRouter, Switch,Route } from "react-router-dom";

// export const Routes = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/">

//       </Route>
//     </Switch>
//   </BrowserRouter>
// );

import { NavBar } from "components/Navbar";
import { Admin } from "pages/Admin";
import { Catalog } from "pages/Catalog";
import { Home } from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={"/products"}>
          <Catalog />
        </Route>
        <Route path={"/admin"}>
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
