import React from "react";

export default function Cart() {
    return (
        <div class="row" style={{ width: "50%", margin: "5% auto" }}>
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title text-3xl">Cart</h1>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                <th style={{ width: "50%" }}>Product</th>
                                    <th style={{ width: "10%" }}>Price</th>
                                    <th style={{ width: "8%" }}>Quantity</th>
                                    <th
                                        style={{ width: "22%" }}
                                        class="text-center"
                                    >
                                        Subtotal
                                    </th>
                                    <th style={{ width: "10%" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr data-id="{{ $id }}" className="text-center">
                                    <td
                                        data-th="Product"
                                        className="text-start"
                                    >
                                        <div class="row">
                                            <div class="col-sm-9">
                                                <h4 class="nomargin">
                                                    Name Here
                                                </h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">1233</td>
                                    <td data-th="Quantity">
                                        <input
                                            type="number"
                                            value="2"
                                            class="form-control quantity update-cart"
                                        />
                                    </td>
                                    <td data-th="Subtotal" class="text-center">
                                        Total
                                    </td>
                                    <td class="actions" data-th="">
                                        <button class="btn btn-danger btn-sm remove-from-cart">
                                            <a class="text-white" href="">
                                                Remove
                                            </a>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="5" class="text-left">
                                        <h3 className="text-3xl">
                                            <strong>Total </strong>
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="text-left">
                                        <a
                                            href="{{ url('/packege') }}"
                                            class="btn btn-warning"
                                        >
                                            <i class="fa fa-angle-left"></i>{" "}
                                            Continue Shopping
                                        </a>
                                        <a
                                            href="{{route('checkout.page')}}"
                                            class="btn btn-success"
                                        >
                                            Checkout
                                        </a>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
