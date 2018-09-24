import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Test </h1>
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('content'))
