import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main className="page page-not-found">
      <section className="section-wrapper">
          <div className="page-info">
              <h1>404!</h1>
              <h2>Oops! That page can't be found.</h2>
          </div>
          <div className="about-text">
              <p>It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
              <p>or you can return to our <NavLink to='/' className="navlink">Home</NavLink> page, if you can not find what you are looking for</p>
          </div>
      </section>
    </main>
  )
}

export default PageNotFound;