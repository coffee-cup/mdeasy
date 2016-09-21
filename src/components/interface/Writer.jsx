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
                <h2 className="f2">Editor</h2>
                <div className="editor">
                    <Editor suppressContentEditableWarning
                        editorState={ value }
                        placeholder={ 'Write here...' }
                        onChange={ this.onChange.bind(this) }
                        ref={(e) => this._editor = e} />
                </div>
            </div>
        );
    }
}

export default Writer;
