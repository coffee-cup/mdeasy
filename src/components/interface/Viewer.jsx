import React, { Component } from 'react';

import marked from 'marked';

class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    convertToMarkdown(text) {
        const html = marked(text);
        return {
            __html: html
        };
    }

    renderHtmlView(text) {
        if (!text || text === '') {
            return <h1>Hello World</h1>;
        }

        return <div dangerouslySetInnerHTML={this.convertToMarkdown(text)} />;
    }

    render() {
        const { text } = this.props;
        return (
            <div className="viewer fill">
                <div className="header-title bg-red pv2 ph4">
                    <h2 className="f3 near-black">and it shows up here...</h2>
                </div>

                <div className="pa4 markdown-view">
                    {this.renderHtmlView(text)}
                </div>
            </div>
        );
    }
}

export default Viewer;
