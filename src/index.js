import React from 'react'
import ReactDOM from 'react-dom'
import { createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/app.js'
import rootReducer from './rootReducer.js'




const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
document.getElementById('root')
)