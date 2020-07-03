import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';

class DishDetail extends React.Component {

    renderDish(dish) {
        // if (dish != null)
            return(
                <Card >
                    <CardImg top width="100%"  src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        // else
        //     return(
        //         <div></div>
        //     );
    }

    renderComments(comments) {
        
        
        return (
           
           comments.map((comment) => {
                
                return (
                    
                    <div key={comment.id}>
                        
                       <ul className="list-unstyled">
                          
                            <li>   
                                {comment.comment}
                            </li>

                            <li>
                                -- {comment.author},  {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                                }).format(new Date(comment.date))}
                            </li>  

                            {/* <li>
                               -- {comment.author} , {comment.date}
                            </li> */}

                        </ul>    
                    </div>
                    
                );
                
                
            })
        );
                    
    }

    renderHeader() {
        return (
            <h4>Comments</h4>
        );
    }

    render() {
        
        if (this.props.selectedDish == null)
            
            return (
                <div></div>
            );
        
        else
            
        return (

            <div className="row">
                <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                 {this.renderHeader()}
                 {this.renderComments(this.props.selectedDish.comments)}
                </div>
            </div>
           
        );
    }
    
}

export default DishDetail;