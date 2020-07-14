import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_open: false
        }
    }

    toggle = () => {
        this.setState({
            is_open: !this.state.is_open
        })
    }

    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Jiatao Xiang</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse is_open={this.state.is_open} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem> 
                                <NavLink href="https://github.com/jiataoxiang">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )      
    }
}

export default AppNavBar;