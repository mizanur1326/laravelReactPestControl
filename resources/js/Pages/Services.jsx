import React from 'react'
import NavBar from '@/Components/NavBar'
import TopBar from '@/Components/TopBar'
import Footer from '@/Components/Footer'
import Services from '@/Components/Services'


export default function ServicePage() {
  return (
    <>
          

        <div>
<TopBar />
<NavBar />
{/* Services Start */}
<Services />
{/* Services End */}

{/* Testiminial Start */}
<div className="container-fluid testimonial py-5">
  <div className="container py-5">
    <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
      <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Testimonial</h5>
      <h1 className="display-5 w-50 mx-auto">What Clients Say About Our Services</h1>
    </div>
    <div className=" testimonial-carousel wow fadeInUp" data-wow-delay=".5s">
      <div className="testimonial-item">
        <div className="testimonial-content rounded mb-4 p-4">
          <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
        </div>
        <div className="d-flex align-items-center  mb-4" style={{padding: '0 0 0 25px'}}>
          <div className="position-relative">
            <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle py-2" alt />
            <div className="position-absolute" style={{top: 33, left: '-25px'}}>
              <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3" />
            </div>
          </div>
          <div className="ms-3">
            <h4 className="mb-0">Client Name</h4>
            <p className="mb-1">Profession</p>
            <div className="d-flex">
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-content rounded mb-4 p-4">
          <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
        </div>
        <div className="d-flex align-items-center  mb-4" style={{padding: '0 0 0 25px'}}>
          <div className="position-relative">
            <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle py-2" alt />
            <div className="position-absolute" style={{top: 33, left: '-25px'}}>
              <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3" />
            </div>
          </div>
          <div className="ms-3">
            <h4 className="mb-0">Client Name</h4>
            <p className="mb-1">Profession</p>
            <div className="d-flex">
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-content rounded mb-4 p-4">
          <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
        </div>
        <div className="d-flex align-items-center  mb-4" style={{padding: '0 0 0 25px'}}>
          <div className="position-relative">
            <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle py-2" alt />
            <div className="position-absolute" style={{top: 33, left: '-25px'}}>
              <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3" />
            </div>
          </div>
          <div className="ms-3">
            <h4 className="mb-0">Client Name</h4>
            <p className="mb-1">Profession</p>
            <div className="d-flex">
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testimonial-content rounded mb-4 p-4">
          <p className="fs-5 m-0">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam quis tempor.</p>
        </div>
        <div className="d-flex align-items-center  mb-4" style={{padding: '0 0 0 25px'}}>
          <div className="position-relative">
            <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle py-2" alt />
            <div className="position-absolute" style={{top: 33, left: '-25px'}}>
              <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3" />
            </div>
          </div>
          <div className="ms-3">
            <h4 className="mb-0">Client Name</h4>
            <p className="mb-1">Profession</p>
            <div className="d-flex">
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
              <small className="fas fa-star text-primary me-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Testiminial End */}


  <Footer />
  
</div>


    </>
  )
}
