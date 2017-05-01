import { INCREASE, DECREASE } from './ActionTypes.js'

export function increase() {
	console.log(increase);
  return {
    type: INCREASE,
    amount: 1
  }
}

export function decrease() {
	console.log(decrease);
  return {
    type: DECREASE,
    amount: 1
  }
}



