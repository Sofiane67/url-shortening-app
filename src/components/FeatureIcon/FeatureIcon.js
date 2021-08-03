import { Component } from "react";
import classes from "./FeatureIcon.module.scss";

class FeatureIcon extends Component{
    render(){
        return (
            <div className={classes["feature-icon__box"]}>
                <img className={classes["feature-icon__img"]} src={this.props.icon} alt="icon"/>
            </div>
        )
    }
}

export default FeatureIcon;