import { Link } from '@inertiajs/react'
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
            <Link href="/" className="nav-item nav-link active">Home</Link>
            <Link href="about" className="nav-item nav-link">About</Link>
            <Link href="packeges" className="nav-item nav-link">Packeges</Link>
            <Link href="contact.html" className="nav-item nav-link">Contact</Link>
            <a href="customer/login" className="nav-item nav-link btn btn-success">Login</a>           
          </div>
        </div>
      </nav>
    </div>
  </nav>
  {/* Navbar End */}
    </>
  )
}
