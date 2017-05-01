import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './home.js'
import Foo from './foo.js'
import Bar from './Bar.js'

class MainText extends React.Component{
	render(){
		return(
			<div>
				<h1>MainText</h1>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/foo" component={Foo} />
					<Route path="/bar" component={Bar} />
				</Switch>
			</div>
			)
	}
}


export default MainText