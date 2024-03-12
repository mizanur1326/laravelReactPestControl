import { usePage } from '@inertiajs/react';
import React from 'react'

const Package = (props) => {
    const { packages } = usePage().props
  console.log(packages);
  return (
    <div className="container-fluid py-5">
  <div className="container py-5">
    <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
      <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Pricing</h5>
      <h1 className="display-5 w-50 mx-auto">Affordable Pricing Plan For Pest Control Services</h1>
    </div>
    <div className="row g-5">
      {
        packages.map(price=>
          <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
          <div className="rounded bg-light pricing-item">
            <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
              <h2 className="m-0">{price.name}</h2>
            </div>
            <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
              <h1 className="mb-0">{price.price}<span className="text-secondary fs-5 fw-normal">/mo</span></h1>
              <p className="mb-0">Basic Pest Control</p>
            </div>
            <div className="p-4 text-center fs-5">
              <p><i className="fa fa-check text-success me-2" />Household pests Control</p>
              <p><i className="fa fa-check text-success me-2" />Rodent Control</p>
              <p><i className="fa fa-check text-success me-2" />Re-Service at No-Charge</p>
              <p><i className="fa fa-times text-danger me-2" />Termite Control</p>
              <p><i className="fa fa-times text-danger me-2" />Mosquito Reduction</p>
              <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Add to Cart</button>
            </div>
          </div>
        </div>
          )
      }
    </div>
  </div>
</div>
  )
}

export default Package