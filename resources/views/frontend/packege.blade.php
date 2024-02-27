@if (session('success'))
<div class="alert alert-success">
{{session('success')}}
</div>
@endif

@if (session('msg'))
<div class="alert alert-success">
{{session('msg')}}
</div>
@endif

@extends('frontend.layouts.app')

@section('title', 'PestKit - Packeges Page')

@section('content')


<!-- Page Header Start -->
<div class="container-fluid page-header py-5">
    <div class="container text-center py-5">
        <h1 class="display-2 text-white mb-4 animated slideInDown">Pricing Plan</h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item text-white" aria-current="page">Pricing Plan</li>
            </ol>
        </nav>
    </div>
</div>
<!-- Page Header End -->





<!-- pricing Start -->
<div class="container-fluid py-5">
    <div class="container py-5">
        <div class="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
            <h5 class="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Pricing</h5>
            <h1 class="display-5 w-50 mx-auto">Affordable Pricing Plan For Pest Control Services</h1>
        </div>
        <div class="row g-5">
            @foreach($packeges as $price)
            <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                <div class="rounded bg-light pricing-item">
                    <div class="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                        <h2 class="m-0">{{$price->name}}</h2>
                    </div>
                    <div class="px-4 py-5 text-center bg-primary pricing-label mb-2">
                        <h1 class="mb-0">{{$price->price}}<span class="text-secondary fs-5 fw-normal">/mo</span></h1>
                        {{-- <p class="mb-0">Basic Pest Control</p> --}}
                    </div>                   
                    <div class="p-4 text-center fs-5">
                        <p><i class="fa fa-check text-success me-2"></i>Household pests Control</p>
                        <p><i class="fa fa-check text-success me-2"></i>Rodent Control</p>
                        <p><i class="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                        <p><i class="fa fa-times text-danger me-2"></i>Termite Control</p>
                        <p><i class="fa fa-times text-danger me-2"></i>Mosquito Reduction</p>
                        <a href="{{route('add.to.cart', $price->id)}}"><button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Add to Cart</button></a>                       
                        {{-- <button class="btn btn-danger"><a href="{{route('add.to.cart', $price->id)}}">Add To Cart</a> </button> --}}
                    </div>
                </div>
            </div>
            @endforeach
            {{-- <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                <div class="rounded bg-light pricing-item">
                    <div class="bg-dark py-3 px-5 text-center rounded-top border-bottom border-primary">
                        <h2 class="m-0 text-primary">Standerd</h2>
                    </div>
                    <div class="px-4 py-5 text-center bg-dark pricing-label pricing-featured mb-2">
                        <h1 class="mb-0 text-primary">$80<span class="fs-5 fw-normal">/mo</span></h1>
                        <p class="mb-0 text-white">Standard Pest Control</p>
                    </div>
                    <div class="p-4 text-center fs-5">
                        <p><i class="fa fa-check text-success me-2"></i>Household pests Control</p>
                        <p><i class="fa fa-check text-success me-2"></i>Rodent Control</p>
                        <p><i class="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                        <p><i class="fa fa-check text-success me-2"></i>Termite Control</p>
                        <p><i class="fa fa-times text-danger me-2"></i>Mosquito Reduction</p>
                        <button type="button" class="btn btn-dark border-0 text-primary rounded-pill px-4 py-3 mt-3">Get Started</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                <div class="rounded bg-light pricing-item">
                    <div class="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                        <h2 class="m-0">Premium</h2>
                    </div>
                    <div class="px-4 py-5 text-center bg-primary pricing-label mb-2">
                        <h1 class="mb-0">$120<span class="text-secondary fs-5 fw-normal">/mo</span></h1>
                        <p class="mb-0">Premium Pest Control</p>
                    </div>
                    <div class="p-4 text-center fs-5">
                        <p><i class="fa fa-check text-success me-2"></i>Household pests Control</p>
                        <p><i class="fa fa-check text-success me-2"></i>Rodent Control</p>
                        <p><i class="fa fa-check text-success me-2"></i>Re-Service at No-Charge</p>
                        <p><i class="fa fa-check text-success me-2"></i>Termite Control</p>
                        <p><i class="fa fa-check text-success me-2"></i>Mosquito Reduction</p>
                        <button type="button" class="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3">Get Started</button>
                    </div>
                </div>
            </div> --}}
        </div>
    </div>
</div>
<!-- Pricing End -->

@endsection