import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
        // logComponentStackToMyService(info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>; // fallback UI
        }
        return this.props.children; // component which we are rendering
    }
}

export default ErrorBoundary;