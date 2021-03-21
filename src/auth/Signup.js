import { Component } from "react";
import Userfront from "@userfront/react";
import { Route, Redirect } from "react-router-dom";

const SignupForm = Userfront.build({
  toolId: "klldrm",
});

export default class Signup extends Component {
  render() {
    function loggedin({ location }) {
      if (Userfront.accessToken()) {
        return (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: location } }}
          />
        );
      } else {
        return (
          <div>
            <SignupForm />
          </div>
        );
      }
    }

    return <Route render={loggedin} />;
  }
}
