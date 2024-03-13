// import React from 'react'
import NavBar from '@/Components/NavBar'
import TopBar from '@/Components/TopBar'
import Footer from '@/Components/Footer'
import React, { useEffect } from 'react';


export default function Blog({ myPackage, userData }) {
  const { user, token } = userData;
  console.log(user.name);
  console.log(myPackage);

    useEffect(() => {
        $('.blog-carousel').owlCarousel({
          // Your Owl Carousel options here
          items: 3,
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 3000,
          nav: true,
          dots: false,
          responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
          }
        });
      }, []);
  return (
    <>
          

        <div>
<TopBar />
<NavBar userData={userData}/>

{/* Blog Start */}
<div className="container-fluid py-5">
  <div className="container py-5">
    <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
      <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Blog</h5>
      <h1 className="display-5">Latest Blog &amp; News</h1>
    </div>
    <div className="owl-carousel blog-carousel wow fadeInUp" data-wow-delay=".5s">
      <div className="blog-item">
        <img src="img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt />
        <div className="rounded-bottom bg-light">
          <div className="d-flex justify-content-between p-4 pb-2">
            <span className="pe-2 text-dark"><i className="fa fa-user me-2" />By Admin</span>
            <span className="text-dark"><i className="fas fa-calendar-alt me-2" />10 Feb, 2023</span>
          </div>
          <div className="px-4 pb-0">
            <h4>How To Build A Cleaning Plan</h4>
            <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
          </div>
          <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
            <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
            <a href="#" className="my-auto btn-primary border-0"><i className="fa fa-comments me-2" />23 Comments</a>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <img src="img/blog-3.jpg" className="img-fluid w-100 rounded-top" alt />
        <div className="rounded-bottom bg-light">
          <div className="d-flex justify-content-between p-4 pb-2">
            <span className="pe-2 text-dark"><i className="fa fa-user me-2" />By Admin</span>
            <span className="text-dark"><i className="fas fa-calendar-alt me-2" />10 Feb, 2023</span>
          </div>
          <div className="px-4 pb-0">
            <h4>How To Build A Cleaning Plan</h4>
            <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
          </div>
          <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
            <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
            <a href="#" className="my-auto text-dark"><i className="fa fa-comments me-2" />23 Comments</a>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <img src="img/blog-2.jpg" className="img-fluid w-100 rounded-top" alt />
        <div className="rounded-bottom bg-light">
          <div className="d-flex justify-content-between p-4 pb-2">
            <span className="pe-2 text-dark"><i className="fa fa-user me-2" />By Admin</span>
            <span className="text-dark"><i className="fas fa-calendar-alt me-2" />10 Feb, 2023</span>
          </div>
          <div className="px-4 pb-0">
            <h4>How To Build A Cleaning Plan</h4>
            <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
          </div>
          <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
            <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
            <a href="#" className="my-auto text-dark"><i className="fa fa-comments me-2" />23 Comments</a>
          </div>
        </div>
      </div>
      <div className="blog-item">
        <img src="img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt />
        <div className="rounded-bottom bg-light">
          <div className="d-flex justify-content-between p-4 pb-2">
            <span className="pe-2 text-dark"><i className="fa fa-user me-2" />By Admin</span>
            <span className="text-dark"><i className="fas fa-calendar-alt me-2" />10 Feb, 2023</span>
          </div>
          <div className="px-4 pb-0">
            <h4>How To Build A Cleaning Plan</h4>
            <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod tempor.</p>
          </div>
          <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
            <a href="#" type="button" className="btn btn-primary border-0">Learn More</a>
            <a href="#" className="my-auto text-dark"><i className="fa fa-comments me-2" />23 Comments</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Blog End */}



  <Footer />
  
</div>


    </>
  )
}
