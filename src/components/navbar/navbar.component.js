import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { DataService } from "../../services/data.service";
import './navbar.css'

export class MainNav extends Component {
    constructor(props) {
        super(props);
        const sections = new DataService().getSections()
            .map((e, i) => {
                return (
                    <NavItem key={i}>
                        <NavLink href={'#' + e.title}>
                            <i className={'fa ' + e.icon}> </i>&nbsp;
                            {e.title}</NavLink>
                    </NavItem>
                )
            })

        this.state = {
            isOpen: false, sections
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mx-auto" navbar>
                            {this.state.sections}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}