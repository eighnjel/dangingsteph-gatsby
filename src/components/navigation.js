import React from 'react'
import { Link } from 'gatsby'

import "./navigation.sass"

class Template extends React.Component {
  render() {
    const { path } = this.props;
    console.log(path);

    return (
      <div id="Header">
        <nav role="navigation" className="navLinks">
          <div className="mainTitle">
            <h1>
              <Link to="/">
                Dancing Steph
              </Link>
            </h1>
          </div>
          <div className={"Header--links"}>
            <Link to="/dances/" className={path.includes('dances') ? "current danceLink" : "danceLink"}>dancer</Link>
            <Link to="/dances/" className={path.includes('travels') ? "current travelLink" : "travelLink"}>traveler</Link>
            <Link to="/dances/" className={path.includes('techs') ? "current techLink" : "techLink"}>techie</Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Template
