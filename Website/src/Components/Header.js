import React,{useState} from "react";
import { Navbar, Nav ,NavDropdown ,Container,NavLink, Button  } from 'react-bootstrap';
import { BsArrowDown } from 'react-icons/bs';
import logo from '../logo.svg'

export const Header = ()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownSols,setShowDropdownSols] = useState(false)
    const handleSelect = () => {
      setShowDropdown(false);
    };
    const handleSelectSols = ()=>{
      setShowDropdownSols(false)
    }
   return (
    <div>
   <Container>
      <Navbar variant="dark" bg='dark' expand="lg" className="">
        <Navbar.Brand href="/"  className="mr-4 d-flex align-items-center">
          <img className="navLogo" src={logo} alt="logo/brand" />
          <span className="ml-2">VisCommerce</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <NavDropdown
              title="Solutions"
              id="basic-nav-dropdownSol"
              show={showDropdownSols}
              onMouseEnter={() => setShowDropdownSols(true)}
              onMouseLeave={() => setShowDropdownSols(false)}
              onSelect={handleSelectSols}
              icon={<BsArrowDown />}
            >
              <NavDropdown.Item href="/solutions">Common</NavDropdown.Item>
              <NavDropdown.Item href="/furniture">Furniture</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/benefits">Benefits</Nav.Link>
            <Nav.Link href="/hdrenderer">HDRenders</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <NavDropdown
              title="Company"
              id="basic-nav-dropdown"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              onSelect={handleSelect}
              icon={<BsArrowDown />}
            >
              <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/team">Team</NavDropdown.Item>
            </NavDropdown>
            <Button><Nav.Link href="/demos">Demos</Nav.Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </div>
   )
}