/**
 * Created by nethmik on 26/10/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class App1 extends React.Component{
    constructor(){
        super();
        this.state ={
            username : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    getInitialState(){
        return {
            username: '@tylermcginnis33'
        }
    }
    handleChange(e){
        this.setState({
            username: e.target.value
        });
    }

    render(){
        return (
            <div>
                <h1>Hello {this.state.username} </h1>
                <br />
                Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
            </div>
        );
    }
}

ReactDOM.render(
    <App1/>,
    document.getElementById('app')
);
export default App1
