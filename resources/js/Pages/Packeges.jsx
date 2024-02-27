import React from 'react'
import NavBar from '@/Components/NavBar'
import TopBar from '@/Components/TopBar'
import Footer from '@/Components/Footer'

export default function () {
  return (
    <>
        <div>
            <TopBar />
            <NavBar />
                {/* pricing Start */}
<div className="container-fluid py-5">
  <div className="container py-5">
    <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
      <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Pricing</h5>
      <h1 className="display-5 w-50 mx-auto">Affordable Pricing Plan For Pest Control Services</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
        <div className="rounded bg-light pricing-item">
          <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
            <h2 className="m-0">Basic</h2>
          </div>
          <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
            <h1 className="mb-0">$60<span className="text-secondary fs-5 fw-normal">/mo</span></h1>
            <p className="mb-0">Basic Pest Control</p>
          </div>
          <div className="p-4 text-center fs-5">
            <p><i className="fa fa-check text-success me-2" />Household pests Control</p>
            <p><i className="fa fa-check text-success me-2" />Rodent Control</p>
            <p><i className="fa fa-check text-success me-2" />Re-Service at No-Charge</p>
            <p><i className="fa fa-times text-danger me-2" />Termite Control</p>
            <p><i className="fa fa-times text-danger me-2" />Mosquito Reduction</p>
            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
        <div className="rounded bg-light pricing-item">
          <div className="bg-dark py-3 px-5 text-center rounded-top border-bottom border-primary">
            <h2 className="m-0 text-primary">Standerd</h2>
          </div>
          <div className="px-4 py-5 text-center bg-dark pricing-label pricing-featured mb-2">
            <h1 className="mb-0 text-primary">$80<span className="fs-5 fw-normal">/mo</span></h1>
            <p className="mb-0 text-white">Standard Pest Control</p>
          </div>
          <div className="p-4 text-center fs-5">
            <p><i className="fa fa-check text-success me-2" />Household pests Control</p>
            <p><i className="fa fa-check text-success me-2" />Rodent Control</p>
            <p><i className="fa fa-check text-success me-2" />Re-Service at No-Charge</p>
            <p><i className="fa fa-check text-success me-2" />Termite Control</p>
            <p><i className="fa fa-times text-danger me-2" />Mosquito Reduction</p>
            <button type="button" className="btn btn-dark border-0 text-primary rounded-pill px-4 py-3 mt-3">Get Started</button>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
        <div className="rounded bg-light pricing-item">
          <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
            <h2 className="m-0">Premium</h2>
          </div>
          <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
            <h1 className="mb-0">$120<span className="text-secondary fs-5 fw-normal">/mo</span></h1>
            <p className="mb-0">Premium Pest Control</p>
          </div>
          <div className="p-4 text-center fs-5">
            <p><i className="fa fa-check text-success me-2" />Household pests Control</p>
            <p><i className="fa fa-check text-success me-2" />Rodent Control</p>
            <p><i className="fa fa-check text-success me-2" />Re-Service at No-Charge</p>
            <p><i className="fa fa-check text-success me-2" />Termite Control</p>
            <p><i className="fa fa-check text-success me-2" />Mosquito Reduction</p>
            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Pricing End */}
            <Footer />
        </div>
    </>
  )
}
