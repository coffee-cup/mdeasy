import React, { Component } from 'react';

import Sidebar from './Sidebar.jsx';
import Writer from './Writer.jsx';
import Viewer from './Viewer.jsx';

class Interface extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    onTextChange(editorState) {
        if (!editorState) {
            return;
        }
        const text = editorState.getCurrentContent().getPlainText();
        this.setState({
            text
        });
    }

    render() {
        const { text } = this.state;
        return (
            <div className="interface full">
                <div className="grid-noGutter full">

                    <div className="fl w-20 pv2 pa4 bg-green">
                        <Sidebar />
                    </div>

                    <div className="fl w-40 pv2 pa4 bg-blue">
                        <Writer onChange={this.onTextChange.bind(this)} />
                    </div>

                    <div className="fl w-40 pv2 pa4 bg-red">
                        <Viewer text={text} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Interface;
