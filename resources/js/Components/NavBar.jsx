import { Link } from '@inertiajs/react'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function NavBar({ userData }) {
  const { user, token } = userData;
  console.log(user.name);

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
            {
              user ?

                <div className=" navbar-collapse me-n3" id="navbarCollapse">
                  <div className="navbar-nav ms-auto">

                    <Link href="/" className="nav-item nav-link active">Home</Link>
                    <Link href="about" className="nav-item nav-link">About</Link>
                    <Link href="ourservices" className="nav-item nav-link">Services</Link>
                    <Link href="blogs" className="nav-item nav-link">Blog</Link>
                    <Link href="packeges" className="nav-item nav-link">Packeges</Link>
                    <Link href="contact" className="nav-item nav-link">Contact</Link>
                    <Link href="cartReact" className="nav-item nav-link">
                      <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#FFD43B" }} />
                    </Link>
                    {/* <a href="customer/login" className="nav-item nav-link">
                      <FontAwesomeIcon icon={faUser} style={{ color: "#FFD43B" }} />
                      <span>{user.name} </span>
                    </a> */}

                    <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <FontAwesomeIcon icon={faUser} style={{ color: "#FFD43B" }} /> 
                        <span className='ms-2'>{user.name}</span>
                      </a>
                      <div class="dropdown-menu m-0 bg-primary">
                        <form action={route("customer.logout")} method="post">
                          <input type="hidden" name='_token' value={token} />
                          <button type='submit' className="dropdown-item text-md font-bold hover:bg-transparent">LogOut</button>
                        </form>
                      </div>
                    </div>

                    <form action={route("customer.logout")} method="post">
                      <input type="hidden" name='_token' value={token} />
                      {/* <button type='submit' className="nav-item nav-link"><p className='text-warning'> {user.name} </p><br />LogOut</button> */}
                    </form>
                    {/* <a href="customer/login" className="nav-item nav-link btn btn-success">Login</a>            */}
                  </div>
                </div>

                :

                <div className=" navbar-collapse me-n3" id="navbarCollapse">
                  <div className="navbar-nav ms-auto">
                    <Link href="/" className="nav-item nav-link active">Home</Link>
                    <Link href="about" className="nav-item nav-link">About</Link>
                    <Link href="ourservices" className="nav-item nav-link">Services</Link>
                    <Link href="blogs" className="nav-item nav-link">Blog</Link>
                    <Link href="packeges" className="nav-item nav-link">Packeges</Link>
                    <Link href="contact" className="nav-item nav-link">Contact</Link>
                    <Link href="cartReact" className="nav-item nav-link">
                      <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#FFD43B" }} />
                    </Link>
                    {/* <a href="customer/login" className="nav-item nav-link">
                      <FontAwesomeIcon icon={faUser} style={{ color: "#FFD43B" }} />
                    </a> */}

                    <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <FontAwesomeIcon icon={faUser} style={{ color: "#FFD43B" }} />
                      </a>
                      <div class="dropdown-menu m-0 bg-primary">
                        <a href="customer/login" class="dropdown-item">Log In</a>
                      </div>
                    </div>

                    {/* <a href="customer/login" className="nav-item nav-link btn btn-success">Login</a>            */}
                    {/* <a href="customer/login"> <button className='btn btn-warning'><p className='text-warning'> {user.name} </p><br /> Log In </button> </a> */}
                  </div>
                </div>

            }

          </nav>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  )
}
