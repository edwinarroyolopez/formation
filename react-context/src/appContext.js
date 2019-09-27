import React, { Component } from 'react'

/* state manager */
export const AppContext = React.createContext({ 
    users: [],
    title: 'default'
 })

export class AppContextProvider extends Component {
    render() {
        return(
            <AppContext.Provider value={{
                users:['leo', 'juan'],
                title:'App'
            }}>
              {this.props.children}
            </AppContext.Provider>
        )
    }
}

export const AppContextConsumer = AppContext.Consumer;