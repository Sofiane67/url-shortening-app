import { Component } from "react";
import HeadingSecondary from "../../UI/Heading/HeadingSecondary/HeadingSecondary";
import Button from "../../UI/Button/Button";
import classes from "./BoostSection.module.scss";

class BoostSection extends Component{
    render(){
        return (
            <div className={classes["boost-section"]}>
                <HeadingSecondary color="white">Boost your links today</HeadingSecondary>
                <Button type="border-circle">Get Started</Button>
            </div>
        )
    }
}

export default BoostSection;