import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ServicePic from './images/services.jpg';
import MissionPic from './images/mission.png';
import '../App.css';


class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {};

    }

    render() {
        return (
            <div>
        	<Card className="bg-light text-center">
				<Card.Body>
    				<Card.Title><h1>Matsika Template</h1></Card.Title>
    				<Card.Text>
      					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    				</Card.Text>
  				</Card.Body>
			</Card>


			<Container>
  				<Row>
  					<Col sm={4} id='caro'>
  						<div>
  						<Tabs defaultActiveKey="services" transition={false} id="noanim-tab-example">
  							<Tab eventKey="services" title="Our Services">
    							<img className="d-block w-100" src={ServicePic} height='320px' alt="image1"/>
  							</Tab>
  							<Tab eventKey="mission" title="Our Mission">
    							<img className="d-block w-100" src={MissionPic} alt="image2"/>
  							</Tab>
						</Tabs>
						</div>
  					</Col>


    				<Col sm={8} id ='caro'>
    					<Carousel>
  							<Carousel.Item>
    							<img className="d-block w-100" src="https://source.unsplash.com/QckxruozjRg/800x400" alt="First slide"/>
    							<Carousel.Caption>
      								<h3>We are a team</h3>
      								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    							</Carousel.Caption>
  							</Carousel.Item>

  							<Carousel.Item>
    							<img className="d-block w-100" src="https://source.unsplash.com/xHaZ5BW9AY0/800x400" alt="Second slide"/>
								<Carousel.Caption>
      								<h3>We deliver quality</h3>
      								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    							</Carousel.Caption>
  							</Carousel.Item>

  							<Carousel.Item>
    							<img className="d-block w-100" src="https://source.unsplash.com/qDY9ahp0Mto/800x400" alt="Third slide"/>
								<Carousel.Caption>
      								<h3>Our work says it all</h3>
      								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    							</Carousel.Caption>
  							</Carousel.Item>
						</Carousel>
    				</Col>
  				</Row>
  			</Container>
			</div>
        );
    }


}

export default Home;