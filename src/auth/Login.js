import { Component } from "react";
import Userfront from "@userfront/react";

const LoginForm = Userfront.build({
  toolId: "naakrr",
});

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}
