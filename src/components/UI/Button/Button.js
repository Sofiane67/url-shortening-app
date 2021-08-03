import { Component } from "react";
import classes from "./Button.module.scss";

class Button extends Component{
    render(){
        const buttonClass = `${classes.button} ${!this.props.type ? "" : `${classes["button--border"]} ${classes[`button--${this.props.type}`]}`}`;
        const event = this.props.onEvent;

        return <button className={buttonClass} onClick={event} id={this.props.id}>{this.props.children}</button>
    }
}

export default Button