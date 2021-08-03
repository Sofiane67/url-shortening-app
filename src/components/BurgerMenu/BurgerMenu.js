import { Fragment } from "react";
import { Component } from "react";
import classes from "./BurgerMenu.module.scss";

class BurgerMenu extends Component{
    render(){
        return (
            <Fragment>
                <label htmlFor="burger-menu" className={classes["burger-menu__icon-box"]}>
                    <span className={classes["burger-menu__icon"]}></span>
                </label>
                <input type="checkbox" className={classes["burger-menu__checkbox"]} id="burger-menu"/>
            </Fragment>
        )
    }
}

export default BurgerMenu;