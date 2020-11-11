import React from 'react'
import Routes from './routes'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'

class App extends React.Component {
    render() {
        return(
            <div className="container">
                <Routes />
            </div>
        )
    }
}

export default App