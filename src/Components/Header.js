import React,{useState} from "react";
import { Navbar, Nav ,NavDropdown ,Container,NavLink  } from 'react-bootstrap';
import { BsArrowDown } from 'react-icons/bs';
import logo from '../logo.svg'

export const Header = ()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const handleSelect = () => {
      setShowDropdown(false);
    };
   return (
    // <div style={{background:'linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, rgba(18, 18, 18, 0.00) 0.01%, #02030B 49.53%)'}}>
   <Container>
      <Navbar variant="dark" bg='dark' expand="lg" className="">
        <Navbar.Brand href="/"  className="mr-4 d-flex align-items-center">
          <img className="navLogo" src={logo} alt="logo/brand" />
          <span className="ml-2">VisCommerce</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="/solutions">Solutions</Nav.Link>
            <Nav.Link href="/benefits">Benefits</Nav.Link>
            <Nav.Link href="/hdrenderer">HDRenders</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/">Resources</Nav.Link>
            <NavDropdown
              title="Company"
              id="basic-nav-dropdown"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              onSelect={handleSelect}
              icon={<BsArrowDown />}
            >
              <NavDropdown.Item href="#/action-1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#/action-2">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="#/action-3">Option 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/demos" className="custom-navlink">
              Demos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    // </div>
   )
}