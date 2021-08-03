import {Component} from "react";
import {NavLink} from "react-router-dom";
import classes from "./NavLinksHeader.module.scss";

class NavLinksHeader extends Component{
    render(){
        const links = [
            {
                name: "Features",
                path: "/1",
            },
            {
                name: "Pricing",
                path: "/2",
            },
            {
                name: "Ressources",
                path: "/3",
            }
        ];

        return (
            <ul className={classes["navLinksHeader__list"]}>
                {
                    links.map((link, index) => <li key={index} className={classes["navLinksHeader__item"]}><NavLink to={link.path} className={classes["navLinksHeader__link"]} activeClassName={classes["navLinksHeader__link--active"]}>{link.name}</NavLink></li>)
                }
            </ul>
        )
    }
}

export default NavLinksHeader