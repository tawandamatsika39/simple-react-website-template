import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Contact extends  React.Component{

	constructor(props){
		super();
		this.state = {};

	}

	handleClick = () => {alert("Your message has been submitted")};

	render(){
		return(
				<div>
				<Card className="bg-light text-center">
					<Card.Body>
    				<Card.Title>Contact us for more info</Card.Title>
  					</Card.Body>
  				</Card>
  				<br/>
  				<div>
  					<Container>
  					<Row>
  					<Col md={{ span: 8, offset: 2 }}>
  					<Form className="text-center">
  						<Form.Group controlId="formGroupEmail">
    						<Form.Label>Email address</Form.Label>
    						<Form.Control type="email" placeholder="Enter email" />
  						</Form.Group>
  						<Form.Group controlId="formGroupText">
    						<Form.Label>Message</Form.Label>
    						<Form.Control as="textarea" placeholder="Write Message here" rows='10'/>
  						</Form.Group>
  						<Button variant="dark" onClick={this.handleClick}>Submit</Button>
					</Form>
					</Col>
					</Row>
					</Container>
  				</div>
  				</div>
  			);
	}


}

export default Contact;