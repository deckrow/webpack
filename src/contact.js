import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Css from './style.sass'

class App extends React.Component {
    render() {
        return (
            <h1>Hello World! from contact</h1>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);