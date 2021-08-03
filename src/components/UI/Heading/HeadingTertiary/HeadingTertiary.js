import { Component } from "react";
import classes from "./HeadingTertiary.module.scss";

class HeadingTertiary extends Component {
    render() {
        return <h2 className={classes["heading-tertiary"]}>{this.props.children}</h2>
    }
}

export default HeadingTertiary;