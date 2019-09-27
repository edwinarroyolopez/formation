import React, { Component, Fragment } from 'react'
import { AppContext } from '../appContext';

class List extends Component {
    render(){
        const { users, title } = this.context
        return (
            <Fragment>
                <h3>{title}</h3>
                <ul>
                    {users.map( user =>
                        <li>{user}</li>
                    )
                    }
                </ul>
            </Fragment>
        )               
    }
}
List.contextType = AppContext

export default List