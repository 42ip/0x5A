import { Component } from "react";
import Userfront from "@userfront/react";
import { Route, Redirect } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const SignupForm = Userfront.build({
  toolId: "klldrm",
});

function AsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 5000));
}
export default class Signup extends Component {
    state = {
    loading: true
    };

  componentDidMount() {
    AsyncCall().then(() => this.setState({ loading: false }));
  }
    
    render() {
        const { loading } = this.state;
        if (loading) {
             return (
                <ClipLoader color={'#4ED6C8'} loading={this.state.loading} size={50} />
            ); 
        } else {          
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
}
