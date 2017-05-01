import { INCREASE, DECREASE } from './ActionTypes.js'
const initialState = {
  number: 1
}


export default function update(state = initialState, action){
	switch(action.type){
		case INCREASE:
		console.log(state);
			return{
				number: state.number + action.amount
			}
		case DECREASE:
			return{
				number: state.number - action.amount
			}
		default:
			return state
	}
}