<script lang="ts" setup>
import { RouterLink } from "vue-router";

const route = useRoute();
</script>

<template>
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
        <NuxtLink to="/" class="nav-item nav-link" active-class="active"
          >Home</NuxtLink
        >
        <NuxtLink to="/about" class="nav-item nav-link" active-class="active"
          >About</NuxtLink
        >
        <NuxtLink to="/service" class="nav-item nav-link" active-class="active"
          >Service</NuxtLink
        >
        <div class="nav-item dropdown">
          <NuxtLink
            to="#"
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            >Pages</NuxtLink
          >
          <div class="dropdown-menu rounded-0 rounded-bottom m-0">
            <NuxtLink to="/feature" class="dropdown-item" active-class="active"
              >Feature</NuxtLink
            >
            <NuxtLink to="/team" class="dropdown-item" active-class="active"
              >Our Doctor</NuxtLink
            >
            <NuxtLink
              to="/appointment"
              class="dropdown-item"
              active-class="active"
              >Appointment</NuxtLink
            >
            <NuxtLink to="/testimonial" class="dropdown-item"
              >Testimonial</NuxtLink
            >
            <NuxtLink to="/404" class="dropdown-item">404 Page</NuxtLink>
          </div>
        </div>
        <NuxtLink to="/contact" class="nav-item nav-link" active-class="active"
          >Contact</NuxtLink
        >
      </div>
      <NuxtLink
        to="/"
        class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >Appointment<i class="fa fa-arrow-right ms-3"></i
      ></NuxtLink>
    </div>
  </nav>
  <!-- Navbar End -->
</template>

<style scoped></style>
