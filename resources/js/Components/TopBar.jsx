import React from 'react'

export default function () {
  return (
    <>
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
    </>
  )
}
