import React, { Component } from 'react'
import Layout from '../../components/layout'
import { AppContextProvider } from '../../context/appContext'

class Dashboard extends Component {
    render() {
        return (
            <AppContextProvider>
                <Layout>
                    <div> 
                        Dashboard
                    </div>
                </Layout>
            </AppContextProvider>
        )
    }
}

export default Dashboard