import React from 'react'

export default function About() {
  return (
    <>
          

        <div>
  {/* Topbar Start */}
  <div className="container-fluid topbar-top bg-primary">
    <div className="container">
      <div className="d-flex justify-content-between topbar py-2">
        <div className="d-flex align-items-center flex-shrink-0 topbar-info">
          <a href="#" className="me-4 text-secondary"><i className="fas fa-map-marker-alt me-2 text-dark" />123 Street, CA, USA</a>
          <a href="#" className="me-4 text-secondary"><i className="fas fa-phone-alt me-2 text-dark" />+01234567890</a>
          <a href="#" className="text-secondary"><i className="fas fa-envelope me-2 text-dark" />Example@gmail.com</a>
        </div>
        <div className="text-end pe-4 me-4 border-end border-dark search-btn">
          <div className="search-form">
            <form method="post" action="index.html">
              <div className="form-group">
                <div className="d-flex">
                  <input type="search" className="form-control border-0 rounded-pill" name="search-input" defaultValue placeholder="Search Here" required />
                  <button type="submit" value="Search Now!" className="btn"><i className="fa fa-search text-dark" /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center topbar-icon">
          <a href="#" className="me-4"><i className="fab fa-facebook-f text-dark" /></a>
          <a href="#" className="me-4"><i className="fab fa-twitter text-dark" /></a>
          <a href="#" className="me-4"><i className="fab fa-instagram text-dark" /></a>
          <a href="#" className><i className="fab fa-linkedin-in text-dark" /></a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid bg-dark">
    <div className="container">
      <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
        <a href="index.html" className="navbar-brand">
          <h1 className="text-primary mb-0 display-5">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2" /></h1>
        </a>
        <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars text-dark" />
        </button>
        <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <a href="index.html" className="nav-item nav-link">Home</a>
            <a href="about.html" className="nav-item nav-link active">About</a>
            <a href="service.html" className="nav-item nav-link">Services</a>
            <a href="project.html" className="nav-item nav-link">Projects</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0 bg-primary">
                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                <a href="blog.html" className="dropdown-item">Blog Post</a>
                <a href="team.html" className="dropdown-item">Team Members</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">About</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white" aria-current="page">About</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* About Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
          <div className="about-img">
            <div className="rotate-left bg-dark" />
            <div className="rotate-right bg-dark" />
            <img src="img/about-img.jpg" className="img-fluid h-100" alt="img" />
            <div className="bg-white experiences">
              <h1 className="display-3">20</h1>
              <h6 className="fw-bold">Years Of Experiences</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".6s">
          <div className="about-item overflow-hidden">
            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">About PestKit</h5>
            <h1 className="display-5 mb-2">World Best Pest Control Services Since 2008</h1>
            <p className="fs-5" style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <div className="row">
              <div className="col-3">
                <div className="text-center">
                  <div className="p-4 bg-dark rounded d-flex" style={{alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-city fa-4x text-primary" />
                  </div>
                  <div className="my-2">
                    <h5>Building</h5>
                    <h5>Cleaning</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <div className="p-4 bg-dark rounded d-flex" style={{alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-school fa-4x text-primary" />
                  </div>
                  <div className="my-2">
                    <h5>Education</h5>
                    <h5>center</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <div className="p-4 bg-dark rounded d-flex" style={{alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-warehouse fa-4x text-primary" />
                  </div>
                  <div className="my-2">
                    <h5>Warehouse</h5>
                    <h5>Cleaning</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="text-center">
                  <div className="p-4 bg-dark rounded d-flex" style={{alignItems: 'center', justifyContent: 'center'}}>
                    <i className="fas fa-hospital fa-4x text-primary" />
                  </div>
                  <div className="my-2">
                    <h5>Hospital</h5>
                    <h5>Cleaning</h5>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-5">Find Services</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Call To Action Start */}
  <div className="container-fluid py-5 call-to-action wow fadeInUp" data-wow-delay=".3s" style={{margin: '6rem 0'}}>
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6">
          <img src="img/action.jpg" className="img-fluid w-100 rounded-circle p-5" alt />
        </div>
        <div className="col-lg-6 my-auto">
          <div className="text-start mt-4">
            <h1 className="pb-4 text-white">Sign Up To Our Newsletter To Get The Latest Offers</h1>
          </div>
          <form method="post" action="index.html">
            <div className="form-group">
              <div className="d-flex call-btn">
                <input type="search" className="form-control py-3 px-4 w-100 border-0 rounded-0 rounded-end rounded-pill" name="search-input" defaultValue placeholder="Enter Your Email Address" required="Please enter a valid email" />
                <button type="email" value="Search Now!" className="btn btn-primary border-0 rounded-pill rounded rounded-start px-5">Subscribe</button>
              </div>
            </div>
          </form>  
        </div>
      </div> 
    </div>
  </div>
  {/* Call To Action End */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
        <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Team</h5>
        <h1 className="display-5 w-50 mx-auto">Our Team Members</h1>
      </div>
      <div className="row g-5">
        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
          <div className="rounded team-item">
            <img src="img/team-1..jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt />
            <div className="team-content bg-primary text-dark text-center py-3">
              <span className="fs-4 fw-bold">Full Name</span>
              <p className="text-muted mb-0">Designation</p>
            </div>
            <div className="team-icon d-flex flex-column ">
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter" /></a>
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram" /></a>
              <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
          <div className="rounded team-item">
            <img src="img/team-2.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt />
            <div className="team-content bg-primary text-dark text-center py-3">
              <span className="fs-4 fw-bold">Full Name</span>
              <p className="text-muted mb-0">Designation</p>
            </div>
            <div className="team-icon d-flex flex-column ">
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter" /></a>
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram" /></a>
              <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
          <div className="rounded team-item">
            <img src="img/team-3.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt />
            <div className="team-content bg-primary text-dark text-center py-3">
              <span className="fs-4 fw-bold">Full Name</span>
              <p className="text-muted mb-0">Designation</p>
            </div>
            <div className="team-icon d-flex flex-column ">
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter" /></a>
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram" /></a>
              <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
          <div className="rounded team-item">
            <img src="img/team-4.jpg" className="img-fluid w-100 rounded-top border border-bottom-0" alt />
            <div className="team-content bg-primary text-dark text-center py-3">
              <span className="fs-4 fw-bold">Full Name</span>
              <p className="text-muted mb-0">Designation</p>
            </div>
            <div className="team-icon d-flex flex-column ">
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-twitter" /></a>
              <a href="#" className="btn btn-primary border-0 mb-2"><i className="fab fa-instagram" /></a>
              <a href="#" className="btn btn-primary border-0"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Footer Start */}
  <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay=".3s">
    <div className="container py-5">
      <div className="row g-4 footer-inner">
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="text-white fw-bold mb-4">About PestKit.</h4>
            <p>Nostrud exertation ullamco labor nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className="mb-0"><a className href="#">PestKit </a> © 2023 All Right Reserved.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="text-white fw-bold mb-4">Usefull Link</h4>
            <div className="d-flex flex-column align-items-start">
              <a className="btn btn-link ps-0" href><i className="fa fa-check me-2" />About Us</a>
              <a className="btn btn-link ps-0" href><i className="fa fa-check me-2" />Contact Us</a>
              <a className="btn btn-link ps-0" href><i className="fa fa-check me-2" />Our Services</a>
              <a className="btn btn-link ps-0" href><i className="fa fa-check me-2" />Terms &amp; Condition</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="text-white fw-bold mb-4">Services Link</h4>
            <div className="d-flex flex-column align-items-start">
              <a className="btn btn-link ps-0" href><i className="fa fa-check me-2" />Apartment Cleaning</a>
              <a className="btn btn-link ps-0" href><i className="fa fa-check me-2" />Office Cleaning</a>
              <a className="btn btn-link ps-0" href><i className="fa fa-check me-2" />Car Washing</a>
              <a className="btn btn-link ps-0" href><i className="fa fa-check me-2" />Green Cleaning</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="text-white fw-bold mb-4">Contact Us</h4>
            <a href className="btn btn-link w-100 text-start ps-0 pb-3 border-bottom rounded-0"><i className="fa fa-map-marker-alt me-3" />123 Street, CA, USA</a>
            <a href className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i className="fa fa-phone-alt me-3" />+012 345 67890</a>
            <a href className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i className="fa fa-envelope me-3" />info@example.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright bg-dark py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
          <a href="#" className="text-primary mb-0 display-6">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2" /></a>
        </div>
        <div className="col-md-4 copyright-btn text-center text-md-start mb-3 mb-md-0 flex-shrink-0">
          <a className="btn btn-primary rounded-circle me-3 copyright-icon" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-primary rounded-circle me-3 copyright-icon" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-primary rounded-circle me-3 copyright-icon" href><i className="fab fa-youtube" /></a>
          <a className="btn btn-primary rounded-circle me-3 copyright-icon" href><i className="fab fa-linkedin-in" /></a>
        </div>
        <div className="col-md-4 my-auto text-center text-md-end text-white">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br />Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  
</div>


    </>
  )
}
