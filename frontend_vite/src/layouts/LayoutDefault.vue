<template>
  <section class="page">
    <div class="full-height">
      <main-navigation />
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="content-pad">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-nav />
  </section>
</template>

<script setup lang="ts">
  import FooterNav from '@/components/common/FooterNav.vue';
  import MainNavigation from '@/components/common/MainNavigation.vue';
</script>
