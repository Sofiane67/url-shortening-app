import { Component } from "react";

class Navigation extends Component{
    render(){
        return <nav>{this.props.children}</nav>
    }
} 

export default Navigation;