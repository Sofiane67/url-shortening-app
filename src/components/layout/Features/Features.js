import { Component } from "react";
import UrlInput from "../../UrlInput/UrlInput";
import HeadingSecondary from "../../UI/Heading/HeadingSecondary/HeadingSecondary";
import Text from "../../UI/Text/Text";
import FeatureCard from "../../FeatureCard/FeatureCard";
import Wrapper from "../../layout/Wrapper/Wrapper";
import ListUrls from "../../ListUrls/ListUrls";
import classes from "./Features.module.scss";
import chart from "./images/icon-chart.svg";
import dashboard from "./images/icon-dashboard.svg";
import pens from "./images/icon-pens.svg";

class Features extends Component{
    render(){

        const cardsInfo = [
            {
                icon: chart,
                title: "Brand Recognition",
                text: "Boost your brand recognition with each click. Generic links don’t  mean a thing. Branded links help instil confidence in your content."
            },
            {
                icon: dashboard,
                title: "Detailed Records",
                text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            },
            {
                icon: pens,
                title: "Fully Customizable",
                text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.."
            }
        ];

        return (
            <section className={classes.features}>
                <Wrapper wrapperClass="features">
                    <UrlInput/>
                    <ListUrls/>
                    <div className={classes["features__text"]}>
                        <HeadingSecondary>Advanced Statistics</HeadingSecondary>
                        <Text size="medium"> Track how your links are performing across the web with our<br />advanced statistics dashboard.</Text>
                    </div>
                    <div className={classes["features__card-list"]}>
                        
                        {
                            cardsInfo.map((card, index) => <FeatureCard key={index} position={index} icon={card.icon} title={card.title} text={card.text} />)
                        }
                        <span className={classes["features__blue-line"]}></span>
                    </div>
                </Wrapper>
            </section>
        )
    }
}

export default Features;