import React, { Component } from 'react';

import marked from 'marked';
import highlight from 'highlight.js';

class Viewer extends Component {
    constructor(props) {
        super(props);

        marked.setOptions({
            highlight: (code) => {
                return highlight.highlightAuto(code).value;
            }
        });
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
                <div className="header-title bg-red pv2 ph4-ns ph3">
                    <h2 className="f3 near-black">and it shows up here...</h2>
                </div>

                <div className="markdown-copy pa4-ns pa3">
                    {this.renderHtmlView(text)}
                </div>
            </div>
        );
    }
}

export default Viewer;
