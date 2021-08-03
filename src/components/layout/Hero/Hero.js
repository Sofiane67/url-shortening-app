import { Component } from "react";
import HeadingPrimary from "../../UI/Heading/HeadingPrimary/HeadingPrimary";
import Text from "../../UI/Text/Text";
import Wrapper from "../Wrapper/Wrapper";
import Button from "../../UI/Button/Button";
import classes from "./Hero.module.scss";

class Hero extends Component{
    render(){
        return (
            <section className={classes.hero}>
                <Wrapper wrapperClass="hero">
                    <div className={classes["hero__text"]}>
                        <HeadingPrimary>More than just shorter links</HeadingPrimary>
                        <Text>Build your brand’s recognition and get detailed<br/>insights on how your links are performing.</Text>
                        <Button type="border-circle">Get Started</Button>
                    </div>
                    <div className={classes["hero__img-box"]}>
                        {/* <img className={classes["hero__img"]} src={illustrationWorking}/> */}
                    </div>
                </Wrapper>
            </section>
        )
    }
}

export default Hero;