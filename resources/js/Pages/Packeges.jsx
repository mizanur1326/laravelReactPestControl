import React from 'react'
import NavBar from '@/Components/NavBar'
import TopBar from '@/Components/TopBar'
import Footer from '@/Components/Footer'
import Package from '@/Components/Package'
import { usePage } from '@inertiajs/react'

export default function () {
  
  return (
    <>
        <div>
            <TopBar />
            <NavBar />
                {/* pricing Start */}
                <Package />
                {/* Pricing End */}
            <Footer />
        </div>
    </>
  )
}
