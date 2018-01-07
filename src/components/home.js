import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    _changeData(){
        console.log('event called');
    }

    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>
                <button onClick={this._changeData.bind(this)}>Change</button>
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}

export default Home;

