import React from 'react';
import {
Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
Form, Modal, ModalHeader, ModalBody,FormGroup, Label, Button, Input, FormFeedback, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
    
class DishDetail extends React.Component {

    constructor(props) {
        super(props); 
        
        this.state = {
            
            isModalOpen: false,
            
           
        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       


    }

         
     

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    
    handleSubmit(values) {
        this.toggleModal();
        // alert(" Rating: " + this.select.value +  " Your Name: " + this.yourname.value +  " Comment: "
        //     + this.comment.value);
        // event.preventDefault();
        console.log("Current State is : " + JSON.stringify(values));
        alert("Current State is : " + JSON.stringify(values));

    }

   
        
   
    render() {

        

        if(this.props.dish != null) {
        
        return (

            <div className="container">

                <div className="row">

                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>

                </div>
                    
                <div className="row">

                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                        
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.comments)}
                        <div>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                        </div>
                    </div>
                    <div>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                                <ModalBody className="ml-3 mr-3">
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                        <Row className= "form-group">
                                            <Label htmlFor="rating">Rating</Label>
                                            
                                            <Control.select model=".rating" id="select" name="select"
                                                    
                                                    className="form-control" >
                                                
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                 
                                            </Control.select>
                                            
                                    
                                        </Row>
                                        <Row className= "form-group">
                                            <Label htmlFor="yourname">Your Name</Label>
                                            
                                                <Control.text model=".yourname" id="yourname" name="yourname"
                                                    placeholder="Your Name"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".yourname"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                           
                                   
                                        </Row>
                                        <Row className= "form-group">
                                            <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea rows={6} model=".comment" id="comment" name="comment"
                                                    placeholder="Your Comment"
                                                    className="form-control" />
                                        </Row>
                                        <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                            </ModalBody>
                        </Modal>

                    </div>
                   
                </div>
                    
            </div>
        );

        } else {
            return <div></div>;
        }

    }
        

     renderComments =(comments) => {
            
        if (comments != null) {
                
             const listItems = comments.map((comment) => {
                return (
                    <div >
                            
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

                );
             });
            
             

            return (listItems)
            
                
            } else {
                return(<div></div>)
            }
            
    }

}


export default DishDetail;
