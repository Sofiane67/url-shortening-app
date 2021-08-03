import { Component } from "react";
import classes from "./HeadingSecondary.module.scss";

class HeadingSecondary extends Component {
    render() {
        const headingClass = `${classes["heading-secondary"]} ${this.props.color ? classes[`heading-secondary--${this.props.color}`]:""}`;
        return <h2 className={headingClass}>{this.props.children}</h2>
    }
}

export default HeadingSecondary;