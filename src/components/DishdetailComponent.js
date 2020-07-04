import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';



    
    function DishDetail ({dish}) {
        
        

        if(dish != null) {
            return (
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>   
                            {renderComments(dish.comments)}   
                        </div>

                     </div>    
                    
                </div>
            )
        } else {
            return(<div></div>)
        }
    }

function renderComments(comments) {
        
    if (comments != null) {
            
            const listItems = comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                        
                        <ul className="list-unstyled">
                        
                            <li>   
                                {comment.comment}
                            </li>

                            <li>
                                -- {comment.author} ,  {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                                }).format(new Date(comment.date))}
                            </li>  

                            
                        </ul>    
                    </div>

                )
            })

            return (listItems)
            
        } else {
            return(<div></div>)
        }
    }


     

export default DishDetail
