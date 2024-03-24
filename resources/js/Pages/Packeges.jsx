import React from "react";
import NavBar from "@/Components/NavBar";
import TopBar from "@/Components/TopBar";
import Footer from "@/Components/Footer";
import Package from "@/Components/Package";
import { usePage } from "@inertiajs/react";

export default function Packeges({ userData }) {
    const { user, token } = userData;
    return (
        <div>
            <TopBar />
            <NavBar userData={userData} />

            <Package />

            <Footer />
        </div>
    );
}