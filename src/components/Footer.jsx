import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="gutter-small">
                <div className="grid-centered-noGutter pv4 center-vertical">
                    <div className="col-9_xs-12 mb0">
                        <p className="f5">
                            Made with <span className="heart">&hearts;</span> by <a href='https://jakerunzer.xyz'>jake runzer</a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
