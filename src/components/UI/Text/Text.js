import { Component } from "react";
import classes from "./Text.module.scss";

class Text extends Component{
    render(){
        let textClass = `${classes.text} ${!this.props.size ? "" : classes[`text--${this.props.size}`]}`;
        return <p className={textClass}>{this.props.children}</p>
    }
}

export default Text;