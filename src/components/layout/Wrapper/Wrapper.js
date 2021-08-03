import { Component } from "react";
import classes from "./Wrapper.module.scss";

class Wrapper extends Component{
    render(){
        const wrapperClass = `${classes.wrapper} ${this.props.wrapperClass ? classes[`wrapper--${this.props.wrapperClass}`]: ""}`
        return <div className={wrapperClass}>{this.props.children}</div>
    }
}

export default Wrapper