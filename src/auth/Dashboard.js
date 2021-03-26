import { Component } from "react";
import Userfront from "@userfront/react";
import { Route, Redirect } from "react-router-dom";
import Home from "../components/Home";

export default class Dashboard extends Component {
  render() {
    function checking({ location }) {
      if (!Userfront.accessToken()) {
        <h4>not logged in</h4>;
        return (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }
      return (
        <div>
          <div>
            <h2>DASHBOARD</h2>
            <Home />
            <h4>logged in</h4>
          </div>
        </div>
      );
    }

    return <Route render={checking} />;
  }
}
