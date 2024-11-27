import React, { Component } from "react";
import Cardlist from '../components/Cardlist.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from "../components/ErrorBoundry.js";

class App extends Component  {
    constructor(){
        super();
        this.state = {
            robots: [],
            searcfield: ''
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> {this.setState({robots:users})})
}

    onSearchChange = (event) => {
        this.setState({searcfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searcfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1 className="tc f1"> LOADING</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f2 m0">ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
        
    );
        }

    }

}
export default App;