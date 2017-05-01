import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Nav from './Nav.js'
import MainText from './mainText.js'


class App extends React.Component{
	render(){
		return(
			<Router>
				<div>
					<Nav/>
					<MainText/>
				</div>
			</Router>
			)
	}
}
export default App


