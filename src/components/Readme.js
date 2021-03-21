import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class Readme extends Component {
    render() {
        return <Redirect to = "/readme" / > ;
    }
}