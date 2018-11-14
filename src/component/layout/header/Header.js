import React from 'react';
import './Header.scss';
export default class header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container-fluid">
                    <div className="col-sm-6">
                        <img className="logo" src={require('../../../public/icons/logo_sizeS.png')} alt="" />
                        <span>11:54:22 09/11/2018</span>
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
            </div>
        )
    }
}