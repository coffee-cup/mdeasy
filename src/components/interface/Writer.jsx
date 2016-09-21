import React, { Component } from 'react';
import Draft, { Editor, EditorState, ContentState } from 'draft-js';
import CodeUtils from 'draft-js-code';

class Writer extends Component {
    constructor(props) {
        super(props);

        const text = props.text || '';
        this.state = {
            editorState: this.editorFromText(text)
        };
    }

    editorFromText(text) {
        return EditorState.createWithContent(ContentState.createFromText(text));
    }

    setContent(text) {
        this.setState({
            editorState: this.editorFromText(text)
        });
    }

    onChange(editorState) {
        this.setState({
            editorState
        });

        this.props.onChange(editorState);
    }

    onClick() {
        this._editor.focus();
    }

    focus() {
        this._editor.focus();
    }

    handleKeyCommand(command) {
        const editorState = this.state.editorState;
        const newState = CodeUtils.handleKeyCommand(editorState, command);

        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    keyBindingFn(e) {
        const command = CodeUtils.getKeyBinding(e);
        if (command) {
            return command;
        }

        return Draft.getDefaultKeyBinding(e);
    }

    handleReturn(e) {
        const editorState = this.state.editorState;

        this.onChange(
            CodeUtils.handleReturn(e, editorState)
        );
        return true;
    }

    handleTab(e) {
        const editorState = this.state.editorState;

        this.onChange(
            CodeUtils.handleTab(e, editorState)
        );
    }

    render() {
        const { editorState } = this.state;
        return (
            <div className="writer fill" onClick={ this.onClick.bind(this) }>
                <div className="header-title bg-red pv2 ph4-ns ph3">
                    <h2 className="f3 near-black">Write markdown here,</h2>
                </div>

                <div className="editor fill bg-near-white pa4-ns pa3">
                    <Editor suppressContentEditableWarning
                        editorState={ editorState }
                        placeholder={ '# Hello World' }
                        onChange={ this.onChange.bind(this) }
                        keyBindingFn={ this.keyBindingFn.bind(this) }
                        handleKeyCommand={ this.handleKeyCommand.bind(this) }
                        handleReturn={ this.handleReturn.bind(this) }
                        onTab={ this.handleTab.bind(this)}
                        ref={(e) => this._editor = e} />
                </div>
            </div>
        );
    }
}

export default Writer;
