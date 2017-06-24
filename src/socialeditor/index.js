import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';

import './editor.css';
import './../../node_modules/draft-js-linkify-plugin/lib/plugin.css';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const plugins = [
  hashtagPlugin,
  linkifyPlugin,
];

export default class SocialEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
		<div className="editor">
			<Editor
	          editorState={this.state.editorState}
	          onChange={this.onChange}
	          plugins={plugins}
	        />
		</div>
    );
  }
}
