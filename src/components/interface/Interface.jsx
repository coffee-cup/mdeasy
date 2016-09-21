import React, { Component } from 'react';

// import Sidebar from './Sidebar.jsx';
import Writer from './Writer.jsx';
import Viewer from './Viewer.jsx';

const textKey = 'TextKey';

class Interface extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        const savedText = localStorage.getItem(textKey);

        if (savedText && savedText !== '') {
            this._writer.setContent(savedText);
            this.setState({
                text: savedText
            });
        }
    }

    onTextChange(editorState) {
        if (!editorState) {
            return;
        }
        const text = editorState.getCurrentContent().getPlainText();
        this.setState({
            text
        });

        localStorage.setItem(textKey, text);
    }

    render() {
        const { text } = this.state;
        return (
            <div className="interface full">
                <div className="grid-noGutter full">

                    <div className="col-6_xs-12 bg-light-grey">
                        <Writer
                            onChange={this.onTextChange.bind(this)}
                            ref={(w) => this._writer = w}/>
                    </div>

                    <div className="col-6_xs-12 bg-white">
                        <Viewer
                            text={text} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Interface;
