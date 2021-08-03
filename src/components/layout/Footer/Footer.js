import { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Logo from "../../UI/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import NavFooter from "../../NavFooter/NavFooter";
import classes from "./Footer.module.scss";
import logo from "./images/logo.svg";
import { ReactComponent as FacebookIcon } from "./images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "./images/icon-instagram.svg";
import { ReactComponent as TwiterIcon } from "./images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "./images/icon-pinterest.svg";

class Footer extends Component{
    render(){
        const urlProps = [
            {
                title: "Features",
                urls: [
                    {
                        name: "Link Shortening",
                        path: "link-shortening"
                    },
                    {
                        name: "Branded Links",
                        path: "branded-links"
                    },
                    {
                        name: "Analytics",
                        path: "analytics"
                    }
                ]
            },
            {
                title: "Ressources",
                urls: [
                    {
                        name: "Blog",
                        path: "blog"
                    },
                    {
                        name: "Developers",
                        path: "developers"
                    },
                    {
                        name: "Support",
                        path: "support"
                    }
                ]
            },
            {
                title: "Company",
                urls: [
                    {
                        name: "About",
                        path: "about"
                    },
                    {
                        name: "Our Team",
                        path: "team"
                    },
                    {
                        name: "Careers",
                        path: "careers"
                    },
                    {
                        name: "Contact",
                        path: "contact"
                    }
                ]
            }
        ]
        return (
            <footer className={classes["footer"]}>
                <Wrapper wrapperClass="footer">
                    <Logo logoSrc={logo} />
                    {
                        urlProps.map((props, index) => {
                            return (
                                <Navigation key={index}>
                                    <NavFooter title={props.title} urls={props.urls} />
                                </Navigation>
                            )
                        })
                    }
                    <div className={classes["footer__icons-box"]}>
                        <FacebookIcon className={classes["footer__icon"]}/>
                        <TwiterIcon className={classes["footer__icon"]} />
                        <PinterestIcon className={classes["footer__icon"]} />
                        <InstagramIcon className={classes["footer__icon"]} />
                    </div>
                </Wrapper>
            </footer>
        )
    }
}

export default Footer;