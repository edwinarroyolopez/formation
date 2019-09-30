import React, { Component } from 'react'

export const AppContext = React.createContext({
    isModalOpen: false,
    toggleModal: () => {},
})

export class AppContextProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    render() {
        
        const { children, } = this.props
        const { isModalOpen, } = this.state

        return (
            <AppContext.Provider
                value={{
                    isModalOpen,
                    toggleModal: this.toggleModal,
                }}
            >
                {children}
            </AppContext.Provider>
        )
    }
}

export const AppContextConsumer = AppContext.Consumer