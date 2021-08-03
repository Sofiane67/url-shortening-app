import { Component } from "react";
import {Link} from "react-router-dom"
import classes from "./NavFooter.module.scss";

class NavFooter extends Component{
    render(){
        return (
            <ul className={classes["footer-nav"]}>
                <h4 className={classes["footer-nav__title"]}>{this.props.title}</h4>
                {
                    this.props.urls.map((url, index) => <li key={index} className={classes["footer-nav__item"]}><Link to={url.path} className={classes["footer-nav__link"]}>{url.name}</Link></li>)
                }
            </ul>
        )
    }
}

export default NavFooter;