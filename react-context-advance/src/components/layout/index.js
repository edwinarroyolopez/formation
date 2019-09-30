import React, { Fragment, Component } from 'react'
import { AppContext } from '../../context/appContext'
import Navbar from '../navbar'
import Modal from '../modal'

import './style.scss'

class Layout extends Component {
    render(){
        const { children } = this.props
        const { isModalOpen, toggleModal  } =  this.context

        return(
            <Fragment>
                <Navbar />
                <div className="content">
                    {children}
                </div>
                {isModalOpen && <Modal />}
            </Fragment>
        )
    }
    
}

Layout.contextType = AppContext

export default Layout