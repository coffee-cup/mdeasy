import React, { Component } from 'react';

// import Sidebar from './Sidebar.jsx';
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

                    <div className="col-6_xs-12 bg-light-grey">
                        <Writer onChange={this.onTextChange.bind(this)} />
                    </div>

                    <div className="col-6_xs-12 bg-white">
                        <Viewer text={text} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Interface;
