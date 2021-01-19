import React , { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css"
import Scroll from "./Scroll";

//STATE is basically an object that describes your app
//here robots and searchbox will change and impact the state

class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			this.setState({robots:users})
		}) 
	}

//use the arrow type functions so that your when you use 'this' it knows that it's from the place where the method is created (App)
//use setState instead of this.set.state	
	onSearchChange = (event) => {
				this.setState({searchfield: event.target.value})

	} 

	render() {
				const filteredRobots = this.state.robots.filter(robot => {
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
		if(!this.state.robots.length){
			return <h1>Loading</h1>
		}
		else{
			return(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>	
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
		
	}
}

export default App;