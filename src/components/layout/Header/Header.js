import { Component } from "react";
import Logo from "../../UI/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import NavLinksHeader from "../../NavLinksHeader/NavLinksHeader";
import Button from "../../UI/Button/Button";
import classes from "./Header.module.scss";
import logo from "./logo.svg";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

class Header extends Component{
    render(){
        return(
            <header className={classes.header}>
                <Logo logoSrc={logo}/>
                <BurgerMenu />
                <div className={classes["header__menu"]}>
                    <Navigation>
                        <NavLinksHeader />
                    </Navigation>
                    <div className={classes["header__button-box"]}>
                        <Button>Login</Button>
                        <Button type="border-circle">Sign Up</Button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;