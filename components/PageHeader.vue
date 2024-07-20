<script lang="ts" setup>
import { RouterLink } from "vue-router";

const route = useRoute();
</script>

<template>
  <!-- Page Header Start -->
  <div
    class="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container py-5">
      <h1
        class="display-3 text-white mb-3 animated slideInDown text-capitalize"
      >
        {{ route.name }}
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb text-uppercase mb-0">
          <li class="breadcrumb-item">
            <RouterLink class="text-white" to="/">Home</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <a class="text-white" href="#">Pages</a>
          </li>
          <li class="breadcrumb-item text-primary active" aria-current="page">
            <RouterLink :to="route.path">{{ route.name }}</RouterLink>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>
