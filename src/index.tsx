if (process.env.NODE_ENV !== 'production') {
console.log('running development mode');
}else{
console.log('running production mode');
}

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppContainer from './app/_master/AppContainer/Components/AppContainer'

ReactDOM.render(<AppContainer/>, document.getElementById('dom-container'))