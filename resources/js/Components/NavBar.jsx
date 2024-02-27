import React from 'react'

export default function NavBar() {
  return (
    <>
      {/* Navbar Start */}
  <nav className="container-fluid bg-dark">
    <div className="container">
      <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
        <a href="index.html" className="navbar-brand">
          <h1 className="text-primary mb-0 display-5">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2" /></h1>
        </a>
        <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars text-dark" />
        </button>
        <div className=" navbar-collapse me-n3" id="navbarCollapse">
          <div className="navbar-nav ms-auto">            
            <a href="/" className="nav-item nav-link active">Home</a>
            <a href="about" className="nav-item nav-link">About</a>
            <a href="packeges" className="nav-item nav-link">Packeges</a>
            <a href="project.html" className="nav-item nav-link">Projects</a>           
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  </nav>
  {/* Navbar End */}
    </>
  )
}
