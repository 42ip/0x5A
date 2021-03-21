import { Component } from 'react';
import Userfront from "@userfront/react";

const LoginForm = Userfront.build({
    toolId: "naakrr"
});

export default class Login extends Component {
    render() {
        return (
            <div>
                <h2>testing out login form</h2>
                <LoginForm />
            </div>
            
        );
    }
}
