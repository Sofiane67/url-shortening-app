import {Component} from "react"
import classes from "./Logo.module.scss";

class Logo extends Component{
    render(){
        return (
            <div className={classes["logo__box"]}>
                <img className={classes["logo__img"]} src={this.props.logoSrc} alt="logo"/>
            </div>
        )
    }
}   

export default Logo;