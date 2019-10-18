import React, { Component } from 'react';
import * as monaco from 'monaco-editor';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.loadEditor();
	}

	loadEditor() {
		this.editor = monaco.editor.create(this.divRef, {
			value: "function hello() {\n\talert('Hello world!');\n}",
			language: 'javascript',
			theme: 'vs-dark',
		});
	}

	onSave() {
		console.log(this.editor.getValue())
	}

	render() {
		return (
			<>
				<div style={{ textAlign: "center" }}>Monaco Editor example</div>
				<div className="row justify-content-center">
					{/* <div className="row"> */}
					<div style={{ marginLeft: "50pc",padding:"5px" }}>
						<button type="button" class="btn btn-primary" style={{ float: "right" }} onClick={this.onSave.bind(this)}>save</button>
					</div>
					{/* </div> */}
					<div
						id="test"
						ref={node => (this.divRef = node)}
						style={{ height: '715px', width: '1000px' }}
					></div>
				</div>
			</>
		);
	}
}

export default App;
