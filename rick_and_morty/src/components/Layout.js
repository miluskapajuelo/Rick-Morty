import React from 'react'
import Nabvar from './Nabvar.js'

function Layout(props) {
    return (
        <React.Fragment>
        <Nabvar />
        {props.children}
      </React.Fragment>
    )
}

export default Layout
