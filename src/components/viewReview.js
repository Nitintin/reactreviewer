import React from 'react';
import AddReview from './addReview';
import FetchReview from './fetchReview';

let reviews =[
    {
        "id":1,
        "user":"ram",
        "comment":"Really enojyed this movie. It was a joy to watch it in theater with family",
        "date":"24/01/2021",
        "star":5
    },
    {
        "id":2,
        "user":"nitin",
        "comment":"very nice , really enjoyed to watch this",
        "date":"24/01/2021",
        "star":4
    },
    {
        "id":3,
        "user":"shyam",
        "comment":"the is best movie ever",
        "date":"24/01/2021",
        "star":5
    },
    {
        "id":4,
        "user":"tina",
        "comment":"decent but could have been better",
        "date":"24/01/2021",
        "star":3
    },
    {
        "id":5,
        "user":"ajay",
        "comment":"was expecting a lot more than this. disappointed",
        "date":"24/01/2021",
        "star":2
    },
    {
        "id":6,
        "user":"neha",
        "comment":"amazing treat to eyes. would recomend to family as well",
        "date":"24/01/2021",
        "star":4
    },
    {
        "id":7,
        "user":"pooja",
        "comment":"very nice",
        "date":"24/01/2021",
        "star":5
    },
    {
        "id":8,
        "user":"vinod",
        "comment":"i hate bollywood and would switch to tollywood instead",
        "date":"24/01/2021",
        "star":1
    },
    {
        "id":9,
        "user":"ashraf",
        "comment":"i wish i devoteed these 3 hours to study",
        "date":"24/01/2021",
        "star":1
    },
    {
        "id":10,
        "user":"zakir",
        "comment":"nepotism is ruining the art",
        "date":"24/01/2021",
        "star":2
    }
];


class review extends React.Component{
    constructor(props){
        super(props);

        this.state={
            addNewReview : false,
            editReview: false,
            deleteReview: false,
            id:'',
            user:'',
            comment:'',
            star:'',
            date:'',
        }
    }

    resetState=()=>{
        this.setState({
            addNewReview: false,
            editReview:false,
            deleteReview:false,
            user:'',
            comment:'',
            star:'',
            date:''
        })
    }

    onAddReviewClick=()=>{
        this.resetState();
        this.setState({
            addNewReview: true,
        })
    }

    deleteReview=(e)=>{
        reviews = reviews.filter(review => review.id != e.target.id);
        console.log(reviews);
        this.resetState();
    }

    onEditReviewClick=(e)=>{
        let selectedReview = reviews.filter(review => review.id == e.target.attributes[1].value);
        console.log(selectedReview[0].user);
        this.setState({
            id:selectedReview[0].id,
            user:selectedReview[0].user,
            comment:selectedReview[0].comment,
            star:selectedReview[0].star,
            date:selectedReview[0].date,
            editReview: true
        })
    }
    
    submitReview = (e)=>{
        if(this.state.id){
            let indexOfEdit= reviews.findIndex(obj => obj.id == this.state.id);
            reviews[indexOfEdit].user=this.state.user;
            reviews[indexOfEdit].comment=this.state.comment;
            reviews[indexOfEdit].date=this.state.date;
            reviews[indexOfEdit].star=this.state.star;

        }else{
            const newId = reviews[reviews.length - 1].id +1;
            const newReview = {
                "id":newId,
                "user":this.state.user,
                "comment":this.state.comment,
                "date":this.state.date,
                "star":this.state.star
            }
            reviews.push(newReview);
        }
        this.resetState();
    }

    handleReviewChange= (e) => {
        switch(e.target.name){
            case 'user':
                this.setState({
                    user:e.target.value
                })
                break;
            
            case 'star':
                this.setState({
                    star:e.target.value
                })
                break;

            case 'date':
                this.setState({
                    date:e.target.value
                })
                break;

            case 'comment':
                this.setState({
                    comment:e.target.value
                })
                break;

            default : console.log("default statement");
                break;
        }
    }

    checkReviewStatus=()=>{
        if(this.state.addNewReview || this.state.editReview){
            return(
                <AddReview 
                    submitReview={this.submitReview} 
                    handleReviewChange={this.handleReviewChange}
                    onGoBackClick={this.onGoBackClick}
                    user={this.state.user} 
                    star={this.state.star} 
                    comment={this.state.comment} 
                    date={this.state.date}
                    id={this.state.id}
                />
            )
        }else{
            return(
                <FetchReview 
                    onAddReviewClick={this.onAddReviewClick}
                    deleteReview={this.deleteReview}
                    review={reviews}
                    onEditReviewClick={this.onEditReviewClick}
                />
            )
        }
    }

    onGoBackClick=()=>{
        this.resetState();
    }
    
    render(){
        return(
            <div className="Main reviewPage">
                <div className="logoutDiv">
                    <button className="logoutBtn" onClick={this.props.handleLogoutClick}>Log Out</button>
                </div>

                {this.checkReviewStatus()}
            </div>
        )
    }
}

export default review;