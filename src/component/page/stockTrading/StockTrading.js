import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import './StockTrading.scss';

export default class stockTrading extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="stockTrading">
                <div className="container-fluid">
                    <div className="stockTrading__header">
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                0.000002
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>...........</DropdownItem>
                                <DropdownItem>...........</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    <div className="stockTrading__history">
                        <div className="title">Lịch sử mua bán</div>
                        <hr className="hr" />
                    </div>

                    <div className="stockTrading__datetime">
                        <Row>
                            <Col>
                                <Label for="exampleEmail">Từ ngày</Label>
                                <Input type="date" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </Col>
                            <Col>
                                <Label for="exampleEmail">Đến ngày</Label>
                                <Input type="date" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </Col>
                            <Col>
                                <Label for="exampleEmail">Mã CK</Label>
                                <Input type="date" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </Col>
                            <Col>
                                <Label for="exampleSelect">Trạng thái lệnh</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Tất cả</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                            <Col>
                                <Label for="exampleSelect">Kênh đặt</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Tất cả</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                            <Col>
                                <Label for="exampleSelect">Loại giao dịch</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Tất cả</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                        </Row>
                    </div>

                    <div className="stockTrading__data">
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th rowspan="2">Số hiệu lệnh</th>
                                    <th rowspan="2">Ngày</th>
                                    <th rowspan="2">Mã CK</th>
                                    <th rowspan="2">Lệnh</th>
                                    <th rowspan="2">Loại giá</th>
                                    <th colspan="2">Lệnh đặt</th>
                                    <th colspan="2">Lệnh khớp</th>
                                    <th rowspan="2">Trạng thái</th>
                                    <th rowspan="2">Phí</th>
                                    <th rowspan="2">Kênh đặt</th>
                                    <th rowspan="2">Thời gian</th>
                                </tr>
                                <tr>
                                    <th>KL đặt</th>
                                    <th>Giá đặt</th>
                                    <th>KL Khớp</th>
                                    <th>Giá khớp TB</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>0214512102312131</th>
                                    <td>2018-01-25</td>
                                    <td>AAA</td>
                                    <td>Mua</td>
                                    <td>Auto</td>
                                    <td>10</td>
                                    <td>10.02</td>
                                    <td>10</td>
                                    <td>14.23</td>
                                    <td>khớp</td>
                                    <td>432</td>
                                    <td>ProTrade</td>
                                    <td>10:01:18</td>
                                </tr>
                                <tr>
                                    <th>0214512102312131</th>
                                    <td>2018-01-25</td>
                                    <td>AAA</td>
                                    <td>Mua</td>
                                    <td>Auto</td>
                                    <td>10</td>
                                    <td>10.02</td>
                                    <td>10</td>
                                    <td>14.23</td>
                                    <td>khớp</td>
                                    <td>432</td>
                                    <td>ProTrade</td>
                                    <td>10:01:18</td>
                                </tr>
                                <tr>
                                    <th>0214512102312131</th>
                                    <td>2018-01-25</td>
                                    <td>AAA</td>
                                    <td>Mua</td>
                                    <td>Auto</td>
                                    <td>10</td>
                                    <td>10.02</td>
                                    <td>10</td>
                                    <td>14.23</td>
                                    <td>khớp</td>
                                    <td>432</td>
                                    <td>ProTrade</td>
                                    <td>10:01:18</td>
                                </tr>
                                <tr>
                                    <th>0214512102312131</th>
                                    <td>2018-01-25</td>
                                    <td>AAA</td>
                                    <td>Mua</td>
                                    <td>Auto</td>
                                    <td>10</td>
                                    <td>10.02</td>
                                    <td>10</td>
                                    <td>14.23</td>
                                    <td>khớp</td>
                                    <td>432</td>
                                    <td>ProTrade</td>
                                    <td>10:01:18</td>
                                </tr>
                                <tr>
                                    <th>0214512102312131</th>
                                    <td>2018-01-25</td>
                                    <td>AAA</td>
                                    <td>Mua</td>
                                    <td>Auto</td>
                                    <td>10</td>
                                    <td>10.02</td>
                                    <td>10</td>
                                    <td>14.23</td>
                                    <td>khớp</td>
                                    <td>432</td>
                                    <td>ProTrade</td>
                                    <td>10:01:18</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        )
    }
}