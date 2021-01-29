import React from 'react';

class deleteReview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="confirmationDiv">
                <div className="deleteMsg">
                    <h3>
                        <center>
                            You are about to delete a review. This change is irreversible. Are you sure about this?
                        </center>
                    </h3>
                    <button type="submit" onClick={ (e) => this.submitReview(e) }>Yes! </button>
                    <button type="button" className="goBack" onClick={this.props.onGoBackClick}>No, take me out</button>
                </div>
            </div>
        )
    }


}

export default deleteReview;