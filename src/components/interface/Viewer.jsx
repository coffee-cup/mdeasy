import React, { Component } from 'react';

class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    convertToMarkdown(text) {
        return text;
    }

    render() {
        const { text } = this.props;
        return (
            <div className="viewer fill">
                <h2 className="f2">Viewer</h2>

                <div className="markdown-view">
                    {this.convertToMarkdown(text)}
                </div>
            </div>
        );
    }
}

export default Viewer;
