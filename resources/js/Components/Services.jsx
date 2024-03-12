import { usePage } from "@inertiajs/react";
import React from "react";

const Services = (props) => {
    const { service } = usePage().props;
    return (
        <div className="container-fluid services py-5">
            <div className="container text-center py-5">
                <div
                    className="text-center mb-5 wow fadeInUp"
                    data-wow-delay=".3s"
                >
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
                        Our Services
                    </h5>
                    <h1 className="display-5">Common Pest Control Services</h1>
                </div>
                <div className="row g-5">
                    {service.map((service) => (
                        <div
                            className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <div className="bg-light rounded p-5 services-item">
                                <div
                                    className="d-flex"
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div className="mb-4 rounded-circle services-inner-icon">
                                        <i className="fa fa-spider fa-3x text-primary" />
                                    </div>
                                </div>
                                <h4>{service.name}</h4>
                                <p className="fs-5">
                                {service.description}
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-primary border-0 rounded-pill px-4 py-3"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp"
                    data-wow-delay=".3s"
                >
                    More Services
                </button>
            </div>
        </div>
    );
};

export default Services;
