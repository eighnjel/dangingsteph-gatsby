import React from 'react'
import { Link } from 'gatsby'
// import base from './base.css'
import Container from './container'
import Navigation from './navigation'

import "./base.sass"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    console.log(location);
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <link href="https://fonts.googleapis.com/css?family=Enriqueta:400,700|Love+Ya+Like+A+Sister&display=swap" rel="stylesheet"></link>
        <Navigation path={location.pathname} />
        {children}
      </Container>
    )
  }
}

export default Template
