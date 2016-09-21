import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="grid-noGutter-centered full bg-main center-vertical gutter-small">
                <div className="col-9_xs-12">
                    <div className="header-content pl4 animated fadeInLeft">
                        <h1 className="f1 mv0 pt1">
                            {"React Template"}
                        </h1>
                        <h2 className="f3 pv1 mv0">
                            {"A static website thing"}
                        </h2>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
