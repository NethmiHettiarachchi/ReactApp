/**
 * Created by nethmik on 27/10/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class App2 extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Tyler McGinnis',
            friends :['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen']
        }
        this.addFriend = this.addFriend.bind(this)
    }

    addFriend(friend){
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    }
    render(){
        return (
            <div>
                <h3> Name: {this.state.name} </h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends} />
            </div>
        )
    }
}
class AddFriend extends React.Component{
    constructor(){
        super();
        this.state ={
            newFriend: ''


        }
        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }

    updateNewFriend(e){
        this.setState({
            newFriend: e.target.value
        });
    }
    handleAddNew(){
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        });
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
                <button onClick={this.handleAddNew}> Add Friend </button>
            </div>
        );
    }
}
class ShowList extends React.Component{
    constructor(){
        super();
        this.state = {
            names:[]
        }
    }
    render(){
        var listItems = this.props.names.map(function(friend){
            return <li> {friend} </li>;
        });
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App2/>,
    document.getElementById('app')
);
export default App2
