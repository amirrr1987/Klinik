
<template>
  <!-- Spinner Start -->
  <!-- <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div> -->
  <!-- Spinner End -->

  <!-- Topbar Start -->
  <div class="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
    <div class="row gx-0 d-none d-lg-flex">
      <div class="col-lg-7 px-5 text-start">
        <div class="h-100 d-inline-flex align-items-center py-3 me-4">
          <small class="fa fa-map-marker-alt text-primary me-2"></small>
          <small>123 Street, New York, USA</small>
        </div>
        <div class="h-100 d-inline-flex align-items-center py-3">
          <small class="far fa-clock text-primary me-2"></small>
          <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
      </div>
      <div class="col-lg-5 px-5 text-end">
        <div class="h-100 d-inline-flex align-items-center py-3 me-4">
          <small class="fa fa-phone-alt text-primary me-2"></small>
          <small>+012 345 6789</small>
        </div>
        <div class="h-100 d-inline-flex align-items-center">
          <NuxtLink
            class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
            href=""
            ><i class="fab fa-facebook-f"></i
          ></NuxtLink>
          <NuxtLink
            class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
            href=""
            ><i class="fab fa-twitter"></i
          ></NuxtLink>
          <NuxtLink
            class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
            href=""
            ><i class="fab fa-linkedin-in"></i
          ></NuxtLink>
          <NuxtLink
            class="btn btn-sm-square rounded-circle bg-white text-primary me-0"
            href=""
            ><i class="fab fa-instagram"></i
          ></NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <NuxtLink
      to="/"
      class="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h1 class="m-0 text-primary">
        <i class="far fa-hospital me-3"></i>Klinik
      </h1>
    </NuxtLink>
    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <NuxtLink to="/" class="nav-item nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-item nav-link active">About</NuxtLink>
        <NuxtLink to="/service" class="nav-item nav-link">Service</NuxtLink>
        <div class="nav-item dropdown">
          <NuxtLink
            to="/"
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            >Pages</NuxtLink
          >
          <div class="dropdown-menu rounded-0 rounded-bottom m-0">
            <NuxtLink to="/feature" class="dropdown-item">Feature</NuxtLink>
            <NuxtLink to="/team" class="dropdown-item">Our Doctor</NuxtLink>
            <NuxtLink to="/appointment" class="dropdown-item"
              >Appointment</NuxtLink
            >
            <NuxtLink to="/testimonial" class="dropdown-item"
              >Testimonial</NuxtLink
            >
            <NuxtLink to="/404" class="dropdown-item">404 Page</NuxtLink>
          </div>
        </div>
        <NuxtLink to="/contact" class="nav-item nav-link">Contact</NuxtLink>
      </div>
      <NuxtLink
        to="/"
        class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >Appointment<i class="fa fa-arrow-right ms-3"></i
      ></NuxtLink>
    </div>
  </nav>
  <!-- Navbar End -->

  <!-- Page Header Start -->
  <div
    class="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container py-5">
      <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb text-uppercase mb-0">
          <li class="breadcrumb-item">
            <NuxtLink class="text-white" to="/">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink class="text-white" to="/">Pages</NuxtLink>
          </li>
          <li class="breadcrumb-item text-primary active" aria-current="page">
            About
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <!-- Page Header End -->
  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
          <h1 class="display-1">404</h1>
          <h1 class="mb-4">Page Not Found</h1>
          <p class="mb-4">
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <NuxtLink class="btn btn-primary rounded-pill py-3 px-5" to="/">
            Go Back To Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer Start -->
  <div
    class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-3 col-md-6">
          <h5 class="text-light mb-4">Address</h5>
          <p class="mb-2">
            <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
          </p>
          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
          <p class="mb-2">
            <i class="fa fa-envelope me-3"></i>info@example.com
          </p>
          <div class="d-flex pt-2">
            <NuxtLink
              class="btn btn-outline-light btn-social rounded-circle"
              href=""
              ><i class="fab fa-twitter"></i
            ></NuxtLink>
            <NuxtLink
              class="btn btn-outline-light btn-social rounded-circle"
              href=""
              ><i class="fab fa-facebook-f"></i
            ></NuxtLink>
            <NuxtLink
              class="btn btn-outline-light btn-social rounded-circle"
              href=""
              ><i class="fab fa-youtube"></i
            ></NuxtLink>
            <NuxtLink
              class="btn btn-outline-light btn-social rounded-circle"
              href=""
              ><i class="fab fa-linkedin-in"></i
            ></NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-light mb-4">Services</h5>
          <NuxtLink class="btn btn-link" href="">Cardiology</NuxtLink>
          <NuxtLink class="btn btn-link" href="">Pulmonary</NuxtLink>
          <NuxtLink class="btn btn-link" href="">Neurology</NuxtLink>
          <NuxtLink class="btn btn-link" href="">Orthopedics</NuxtLink>
          <NuxtLink class="btn btn-link" href="">Laboratory</NuxtLink>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-light mb-4">Quick Links</h5>
          <NuxtLink class="btn btn-link" href="">About Us</NuxtLink>
          <NuxtLink class="btn btn-link" href="">Contact Us</NuxtLink>
          <NuxtLink class="btn btn-link" href="">Our Services</NuxtLink>
          <NuxtLink class="btn btn-link" href="">Terms & Condition</NuxtLink>
          <NuxtLink class="btn btn-link" href="">Support</NuxtLink>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-light mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div class="position-relative mx-auto" style="max-width: 400px">
            <input
              class="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy;
            <NuxtLink class="border-bottom" href="#">Your Site Name</NuxtLink>,
            All Right Reserved.
          </div>
          <div class="col-md-6 text-center text-md-end">
            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            Designed By
            <NuxtLink class="border-bottom" href="https://htmlcodex.com"
              >HTML Codex</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->

  <!-- Back to Top -->
  <a
    href="#"
    class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
    ><i class="bi bi-arrow-up"></i
  ></a>
</template>

