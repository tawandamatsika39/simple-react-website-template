import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';

const footerBar = () => {
	return(
		<Card className="bg-dark text-center" id="foot">
			<Card.Footer className="text-muted">
			By: Tawanda Matsika
			</Card.Footer>
		</Card>
		);

}

export default footerBar;