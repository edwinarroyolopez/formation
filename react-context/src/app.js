import React, { Component } from 'react'
import { 
    AppContextProvider
} from './appContext'
import List from './components/list'



class App extends Component {
    render() {
        return(
            <AppContextProvider>
                <List />
            </AppContextProvider>
        )
    }
}

export default App ;