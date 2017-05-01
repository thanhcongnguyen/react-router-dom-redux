import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as allActions from '../Actions.js'
class Home extends React.Component{
	constructor(){
		super();
	}

	render(){
		const {numberApp, actionsApp}= this.props
		return (
			<div>
      			Some state changes:
      			{numberApp}
      			<hr/>
      			<button onClick={actionsApp.increase}>Increase</button>
      			<button onClick={actionsApp.decrease}>Decrease</button>
    		</div>
    		)
	}
}


function mapStateToProps(state){
	return{
		numberApp: state.countReducer.number
	}
}

function mapDispatchToProps(dispatch){
	return{
		actionsApp: bindActionCreators(allActions,dispatch)
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(Home)