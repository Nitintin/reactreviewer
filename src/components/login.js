import React from 'react';

class Form extends React.Component{

    onLoginSubmit=(e)=>{
        e.preventDefault();
        this.props.handleLoginClick(e);
    }

    displayError=(props)=>{
        if(this.props.loginError) 
            return <h3 className='loginError'>Username or password was incorrect</h3>
        else 
            return <h3 className='loginMsg'>Please enter your details</h3>
    }

    render(){
        return(
            <div className="Main loginPage">
                <div className="loginForm">
                    <form>
                        {this.displayError()}
                        <table>
                            <tbody>
                                <tr>
                                    <td>Username :</td>
                                    <td>
                                        <input type="text" placeholder="enter user name" name="uid" onChange={this.props.handleChange} required></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password :</td>
                                    <td>
                                        <input type="password" placeholder="enter password" name="pwd" onChange={this.props.handleChange} required></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <center>
                            <button className="loginBtn" type="submit" onClick={ (e)=>this.onLoginSubmit(e) }>Login</button>
                        </center>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form