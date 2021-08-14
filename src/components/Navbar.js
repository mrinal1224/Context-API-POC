import React from 'react'

const Navbar = ({NoOfMovies}) => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Number of Movies = {NoOfMovies}
          </a>
        </div>
      </nav>
    );
}

export default Navbar
