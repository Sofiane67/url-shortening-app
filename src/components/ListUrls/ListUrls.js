import { Component } from "react";
import { connect } from "react-redux";
import Button from "../UI/Button/Button";
import classes from "./ListUrls.module.scss";

class ListUrls extends Component{

    constructor(props){
        super(props);
        this.state = {
            urlCopied: false,
        }
    }

    // componentDidUpdate(){

    // }

    async clipBoardCopy(url){
        try {
            await navigator.clipboard.writeText(url);
            this.setState({urlCopied: true})
        } catch (error) {
            console.log(error);
        }
    }

    copyUrlHandler(id,e){
        const currentBtn = e.target;
        const url = currentBtn.previousSibling.innerText;
        this.clipBoardCopy(url);
        currentBtn.innerHTML = "Copied";
        currentBtn.classList.add(classes["list-url__copyBtn"]);
    }

    render(){
        return (
            <div className={classes["list-url"]}>
                
                {
                    this.props.urls.map((url, index) => {
                        return (<div key={index} className={classes["list-url__card"]}>
                            <p className={classes["list-url__long-link"]}>{url.originalLink}</p>
                            <p className={classes["list-url__short-link"]}>{url.shortLink}</p>
                            <Button type="border-small-radius"  onEvent={this.copyUrlHandler.bind(this,index)} id={`copyBtn-${index}`}>Copy</Button>
                        </div>)
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        urls : state
    }
};

export default connect(mapStateToProps)(ListUrls);