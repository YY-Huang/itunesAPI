import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';

import searchForm from './components/searchForm';

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <searchForm />
                {searchForm}
                <h1> Test </h1>
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('content'))
