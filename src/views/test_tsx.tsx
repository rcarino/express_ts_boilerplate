import React, { Component } from "react";
// import MyComponent from "./my-component";
// import { MyLayout } from "./my-layout";

export interface Props {
    title: string;
    lang: string;
}

// Important -- use the `default` export
export default class MyView extends Component<Props> {
    render() {
        return <div>Hello from React! Title: {this.props.title}</div>;
    }
}
