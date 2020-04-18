import React from 'react';
import { NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';


const navStyle = {
	textDecoration :'none',
  	width: '120px',
  	fontSize :'18px',
  	color: 'white',
  	marginRight:'20px',
  	marginLeft:'20px'
};

const active = {
    borderStyle: 'solid',
  	borderWidth:'thin',
  	borderRadius: '5px'
}

const bar = () => {

    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        	<Navbar.Brand to="/">Matsika Template</Navbar.Brand>
        	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
        	<Navbar.Collapse id="responsive-navbar-nav">
        		<Nav className="ml-auto">
        			<NavLink exact to="/" style={navStyle} activeStyle={active} >Home</NavLink>
          			<NavLink to="/gallery" style={navStyle} activeStyle={active}>Gallery</NavLink>
          			<NavLink to="/about" style={navStyle} activeStyle={active}>About</NavLink>
          			<NavLink to="/contact" style={navStyle} activeStyle={active}>Contact us</NavLink>
          		</Nav>


          		<Nav className="mr-auto">
          			<DropdownButton id='drop' style={navStyle} title='Useful Links' variant='secondary'>
          				<NavDropdown.Item eventKey="1" >Help Center</NavDropdown.Item>
        				<NavDropdown.Item eventKey="2" >Blog</NavDropdown.Item>
        				<NavDropdown.Item eventKey="3" href="#" >Useful Links</NavDropdown.Item>
        			</DropdownButton>	
          		</Nav>

          	</Navbar.Collapse>
        </Navbar>
    );
}

export default bar;