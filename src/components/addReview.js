import React from 'react';

class editReview extends React.Component{
    submitReview=(e)=>{
        console.log(e);
        e.preventDefault();
        this.props.submitReview(e);
    }

    render(){
        return(
            <div className="newReview">
                <form>
                    <center>
                        <h3>Add/Edit Review</h3>
                        <input type="text" name="user" placeholder="Add user name" onChange={this.props.handleReviewChange} required defaultValue={this.props.user}></input>
                        <input type="number" name="star" placeholder="Give your rating in stars" min="1" max="5" onChange={this.props.handleReviewChange} required defaultValue={this.props.star}></input>
                        <input type="date" name="date" placeholder="Choose date on which you watch the movie" onChange={this.props.handleReviewChange} defaultValue={this.props.date}></input>
                        <input type="text" name="comment" placeholder="Add your review" onChange={this.props.handleReviewChange} defaultValue={this.props.comment}></input>
                        <input type="hidden" name="id" value={this.props.user}></input>
                        <br/>
                        <button type="submit" onClick={ (e) => this.submitReview(e) }>Submit !</button>
                        <button type="button" className="goBack" onClick={this.props.onGoBackClick}>Cancel</button>
                    </center>
                </form>
            </div>
        )
    }
}

export default editReview;