import React from 'react';
import image from '../assets/user.png';


class fetchReview extends React.Component{
    
    getAllreviews=()=>{
        let reviewListItem = this.props.review.reverse().map((newItem)=>
            <li className="review" key={newItem.id}>
                <div className="userImg">
                    <img src={image} alt="user "/>
                </div>
                <div className="reviewDesc">
                    <div className="comment">"{newItem.comment}"</div>
                    <div className="reviewer">- <i>{newItem.user}</i></div>
                    
                </div>   
                <div className="reviewDetail">
                    <div className="actionKeys">
                        <button className="editReview" data={newItem.id} onClick={this.props.onEditReviewClick}>Edit</button>
                        <button className="deleteReview" id={newItem.id} onClick={this.props.deleteReview}>Delete</button>
                    </div>
                    {newItem.star} stars
                    <br/>
                    {newItem.date}
                </div>             
            </li>
        );
        return(
            <ul className="reviewList"> 
                {reviewListItem} 
            </ul>            
        );
    }

    render(){
        return(
            <>
                <div className="reviews">
                    {this.getAllreviews()}
                </div>
                <div className="addNew">
                    <button type="button" className="addNewBtn" onClick={this.props.onAddReviewClick}>Add New Review</button>
                </div>
            </>
        )
    }
}

export default fetchReview;