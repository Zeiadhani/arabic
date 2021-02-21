import Main from './pages/main'
import Rules from './pages/rules'
import Practice from './pages/practice'
import React, { Component } from 'react'

export class App extends Component {
	state = {page:'main'}
	pages=(param)=>{
		this.setState({page:param})
	}
	render() {
		if(this.state.page==='main'){
			return (
				<div>
					<Main activation={this.pages}/>
				</div>
			)
		
	}
		else if(this.state.page==='rules'){
			return (
				<div>
					<Rules activation={this.pages}/>
				</div>
			)
		}

		else if(this.state.page==='practice'){
			return (
				<div>
					<Practice activation={this.pages}/>
				</div>
			)
		}
}
}

export default App
