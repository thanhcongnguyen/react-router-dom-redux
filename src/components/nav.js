import React from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends React.Component{
	render(){
		return(
			<div>
				<ul>
					<li><NavLink exact  to="/" activeStyle={{fontWeight: 'bold',color: 'black'}}>Home</NavLink></li>
					<li><NavLink exact  to="/foo" activeStyle={{fontWeight: 'bold',color: 'black'}}>Foo</NavLink></li>
					<li><NavLink exact  to="/bar" activeStyle={{fontWeight: 'bold',color: 'black'}}>Bar</NavLink></li>
				</ul>
			</div>
			)
	}
}


export default Nav