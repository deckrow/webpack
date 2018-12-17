import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Css from './style.sass'

class App extends React.Component {
    render() {
        return (
            <div className="col">
                <h1>Hello World from index</h1>
                <button className="button">Hello</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);