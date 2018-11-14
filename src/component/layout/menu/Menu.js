import React from 'react';
import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import './Menu.scss';

export default class menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="menu">
                <div className="container-fluid">
                    <Navbar light expand="md">
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="" navbar>
                                <NavItem>
                                    <NavLink href="/">Bảng giá</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/stocktrading">Giao dịch cổ phiếu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Giao dịch tiền</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Thông tin tài khoản</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Công cụ phân tích</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Sản phẩm dịch vụ</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Hướng dẫn</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}