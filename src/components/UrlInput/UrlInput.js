import { Component } from "react";
import { connect } from "react-redux";
import Button from "../UI/Button/Button";
import Loader from "../Loader/Loader";
import classes from "./UrlInput.module.scss";

class UrlInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
            isValid: false,
            isSendReq: false,
            errorMsg: "",
            isLoading: false,
            originalLink: "",
            shortLink: ""
        };
    }

    inputValueHandler(e){
        this.setState({value: e.target.value})
    }

    focusInput(){
        this.setState({
            isSendReq: false,
            errorMsg: ""
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.isValid !== this.state.isValid){
            if(this.state.isValid){
                const url = `https://api.shrtco.de/v2/shorten?url=${this.state.value}`;
                
                const stateUpdate = {
                    value: "",
                    isLoading: false,
                    isValid: false,
                }

                fetch(url)
                .then(res => res.json())
                .then(data =>{
                    if(!data.ok) throw new Error(data.error)
                    const {result} = data;
                    this.setState({
                        originalLink: result.original_link,
                        shortLink: result.short_link,
                        isSendReq: false,
                        ...stateUpdate
                    });

                    this.props.addUrl(this.state.originalLink, this.state.shortLink);
                })
                .catch(error => {
                    this.setState({
                        errorMsg: error.message,
                        ...stateUpdate
                    })
                })
            }
        }
    }

    httpRequestHandler(e){
        this.setState({isSendReq: true});

        if(!this.state.value && !this.state.isValid){
            this.setState({errorMsg: "Please add a link"});
        }else{
            this.setState({
                isValid: true,
                isLoading: true
            })

        }
    }

    render(){
        return (
            <div className={classes["url-input"]}>
                <div className={classes["url-input__field-box"]}>
                    <input className={`${classes["url-input__field"]} ${this.state.errorMsg && this.state.isSendReq?classes["url-input__field--error"]:""}`} onChange={this.inputValueHandler.bind(this)} onFocus={this.focusInput.bind(this)} value={this.state.value} type="url" placeholder="Shorten a link here..." />
                    {this.state.isLoading && <Loader/>}
                    {this.state.isSendReq && <p className={classes["url-input__errorMsg"]}>{this.state.errorMsg}</p>}
                </div>
                <Button type="border-small-radius" onEvent={this.httpRequestHandler.bind(this)} >Shorten It!</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        url: state.store
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUrl: (originalLink, shortLink) => dispatch({
            type: "ADD_URL", 
            value: {
                originalLink,
                shortLink
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UrlInput);