import {Component} from "react";
import classes from "./HeadingPrimary.module.scss";

class HeadingPrimary extends Component {
    render(){
        return <h1 className={classes["heading-primary"]}>{this.props.children}</h1>
    }
}

export default HeadingPrimary;