import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MissionPic from './images/mission.png';

class About extends  React.Component{

	constructor(props){
		super();
		this.state = {};

	}

	render(){
		return(
				<div>
				<Card className="bg-light text-center">
					<Card.Body>
    				<Card.Title>Learn More About Our Company</Card.Title>
  					</Card.Body>
  				</Card>

  				<Container>
  					<Row>
  					<Col md={{ span: 8, offset: 2 }}>
  						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  						 mollit anim id est laborum.

  						<img className="d-block w-100" src={MissionPic} alt="image2"/>
  					
					</Col>
					</Row>
				</Container>
				</div>
  			);
	}


}

export default About;