import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */

import "./theme/variables.css";
import BookNow from "./pages/BookNow";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import AllProperties from "./pages/AllProperties";
import PropertiesForSale from "./pages/PropertiesForSale";
import PropertiesForRent from "./pages/PropertiesForRent";

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPass />
        </Route>
        <Route exact path="/allproperties">
          <AllProperties />
        </Route>
        <Route exact path="/propertiesforsale">
          <PropertiesForSale />
        </Route>
        <Route exact path="/propertiesforrent">
          <PropertiesForRent />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/checkout">
          <BookNow />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
