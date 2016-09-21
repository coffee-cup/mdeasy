import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

class Writer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: EditorState.createEmpty()
        };
    }

    onChange(editorState) {
        const value = editorState;
        this.setState({
            value
        });

        this.props.onChange(value);
    }

    onClick() {
        this._editor.focus();
    }

    render() {
        const { value } = this.state;
        return (
            <div className="writer fill" onClick={ this.onClick.bind(this) }>
                <div className="header-title bg-red pv2 ph4">
                    <h2 className="f3 near-black">Write markdown here,</h2>
                </div>

                <div className="editor fill bg-near-white pa4">
                    <Editor suppressContentEditableWarning
                        editorState={ value }
                        placeholder={ '# Hello World' }
                        onChange={ this.onChange.bind(this) }
                        ref={(e) => this._editor = e} />
                </div>
            </div>
        );
    }
}

export default Writer;
