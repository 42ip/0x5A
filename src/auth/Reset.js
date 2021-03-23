import { Component } from "react";
import Userfront from "@userfront/react";

const PasswordResetForm = Userfront.build({
  toolId: "mnnlrn",
});

export default class Reset extends Component {
  render() {
    return (
      <div>
        <PasswordResetForm />
      </div>
    );
  }
}
