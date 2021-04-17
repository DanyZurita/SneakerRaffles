import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function SneakerNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="clearfix" color="light" light expand="md" fluid="xxl">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto float-left" navbar>
            <NavItem>
              <NavLink href="/">Sneakers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Release Calendar</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sell and Buy
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Sell</DropdownItem>
                <DropdownItem>Buy</DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>Coming soon...</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarBrand className="center">SNEAKERS RAFFLES</NavbarBrand>
          <ButtonGroup className="me-auto float-right">
            <Button className="sign" color="light" href="/">
              Sign In
            </Button>
            <Button className="sign" color="dark" href="/">
              Register
            </Button>
          </ButtonGroup>
        </Collapse>
      </Navbar>
  );
}
