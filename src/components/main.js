import React from 'react';
import Form from './login';
import Review from './viewReview';

class Main extends React.Component{
    constructor(){
        super();
        this.state={
            username : '',
            pwd : '',
            login : false,
            loginError : null
        }
    }

    handleLoginClick = (e)=>{
        if(this.state.username==='admin' && this.state.pwd==='12345'){
            this.setState({
                login:true
            })
        }else{
            this.setState({loginError : true})
        }        
    }

    handleLogoutClick = (e)=>{
        if (this.state.login) this.setState({login:false})
        this.setState({loginError : false})
    }

    handleChange = (e)=>{
        e.target.name === 'uid'? this.setState({username:e.target.value}) : this.setState({pwd:e.target.value})
    }

    checkLoginStatus(){
        if( this.state.login === false){
            return <Form handleLoginClick={this.handleLoginClick} handleChange={this.handleChange} loginError={this.state.loginError}/>
        }else{
            return <Review handleLogoutClick={this.handleLogoutClick}/>
        }
    }

    render(){
        return(
            <>
                {this.checkLoginStatus()}
            </>
        )
    }
}

export default Main