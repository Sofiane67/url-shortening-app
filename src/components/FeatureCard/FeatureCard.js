import { Component } from "react";
import FeatureIcon from "../FeatureIcon/FeatureIcon";
import HeadingTertiary from "../UI/Heading/HeadingTertiary/HeadingTertiary";
import Text from "../UI/Text/Text";
import classes from "./FeatureCard.module.scss";

class FeatureCard extends Component{
    render(){
        return (
            <div className={`${classes["feature-card"]} ${classes[`feature-card--${this.props.position}`]}`}>
                <FeatureIcon icon={this.props.icon}/>
                <HeadingTertiary>{this.props.title}</HeadingTertiary>
                <Text size="small">{this.props.text}</Text>
            </div>
        )
    }
}

export default FeatureCard;