import React from 'react'
import NavBar from '@/Components/NavBar'
import TopBar from '@/Components/TopBar'
import Footer from '@/Components/Footer'
import Cart from '@/Components/Cart'


export default function Details({ myPackage, userData }) {
  const { user, token } = userData;
  console.log(user.name);
  console.log(myPackage);
  return (
    <>


<div>
  <TopBar />
  <NavBar userData={userData}/>

  {/* Order Page Data Start */}


  <div class="row" style={{ width: "50%", margin: "5% auto" }}>
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center text-4xl">Billing Details</h1>


          <form action={route('checkout.order')} method="POST">
            <div className="row" >
              <div className="col-lg-6" style={{margin: "0 auto"}}>
                {/* <h2 className="checkout-title text-3xl text-yellow-700">Billing Details</h2> */}
                <div className="row">
                  <input type="hidden" name='_token' value={token} />
                  <div className="col-sm-12">
                    <label className='text-black'> Product Name </label>
                    <input type="text" className="form-control" name="productName" defaultValue={myPackage.name} />
                  </div>
                  <div className="col-sm-12">
                    <input type="hidden" className="form-control" name="customer_id" defaultValue={user.id} />
                  </div>
                  <div className="col-sm-12">
                    <label>Name *</label>
                    <input type="text" className="form-control" name="customerName" defaultValue={user.name} />
                  </div>
                  <div className="col-sm-12">
                    <label>Price</label>
                    <input type="hidden" className="form-control" name="sub_total" defaultValue={myPackage.price} />
                    <input type="text" className="form-control" name="total_amount" defaultValue={myPackage.price} />
                  </div>
                </div>
                <label>Email address *</label>
                <input type="email" className="form-control" name="email" defaultValue={user.email} />
                <label>Phone Number *</label>
                <input type="text" className="form-control" name="phone" defaultValue={user.phone} />
                <label>Street address *</label>
                <input type="text" className="form-control" placeholder="House number and Street name" name="address" defaultValue={user.address} />
                <label>Order notes (optional)</label>
                <textarea className="form-control" cols={30} rows={4} placeholder="Notes about your order, e.g. special notes for delivery" defaultValue={""} />
                <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
                  <span className="btn btn-success">Place Order</span>
                </button>
              </div></div></form>

        </div>
      </div>
    </div>
  </div>
  {/* Order Page Data End */}

  <Footer />

</div>


    </>
  )
}
