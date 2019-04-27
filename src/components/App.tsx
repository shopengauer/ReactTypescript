import * as React from 'react';

import PageInterface from '../PageInterface';
import {Button} from 'reactstrap';
import {Nav} from 'reactstrap';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table

} from 'reactstrap';


export default class App extends React.Component<PageInterface, {}> {

    render() {
        return <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Stock controller</NavbarBrand>
                <NavbarToggler  />
                <Collapse  navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Ticker</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Nvidia</td>
                    <td>NVD</td>
                    <td>177.99$</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Xilinx</td>
                    <td>XLNX</td>
                    <td>119$</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </div>
    }
}



