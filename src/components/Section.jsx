import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div className="section animated fadeIn">
                <h3 className="f3 mt0">
                    {this.props.heading}
                </h3>
                {this.props.children}
            </div>
        );
    }
}

export default Section;
