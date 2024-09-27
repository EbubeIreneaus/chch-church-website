<script lang="ts" setup>
const isNavOpen = ref(false);
</script>

<template>
  <header class="absolute w-full z-[9999]">
    <div
      class="justify-between items-center px-20 h-[61px] text-white bg-transparent hidden lg:flex"
    >
      <div>
        <i class="fa-solid fa-location-dot"></i>
        &nbsp;
        <span> 684 West College St. Sun City, USA </span>
      </div>
      <ul class="*:inline *:px-3">
        <li><i class="fa-brands fa-facebook"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li>
        <li><i class="fa-brands fa-tiktok"></i></li>
        <li><i class="fa-brands fa-linkedin"></i></li>
      </ul>
    </div>

    <nav>
      <div
        class="h-[91px] flex justify-between items-center text-slate-100 lg:px-16 md:px-10 px-5"
      >
        <div>
          <ul class="*:text-4xl font-extrabold *:inline">
            <li class="text-accent">C</li>
            <li class="text-slate-100">H</li>
            <li class="text-slate-100">C</li>
            <li class="text-accent">H</li>
          </ul>
        </div>

        <ul class="*:inline-block *:px-3 *:font-bold hidden lg:block">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>
            <router-link to="#">Pages</router-link>
            <i class="fa-solid fa-plus"></i>
          </li>
          <li><RouterLink to="#">Sermon</RouterLink></li>
          <li><router-link to="#">Ministry</router-link></li>
          <li><RouterLink to="#">Blog</RouterLink></li>
          <li><router-link to="#">Contact us</router-link></li>
        </ul>
        <v-btn variant="tonal" class="!bg-accent !hidden lg:!block"
          >Donate</v-btn
        >

        <v-btn
          icon="fa-solid fa-bars"
          variant="tonal"
          class="d-lg-none"
          @click="isNavOpen = !isNavOpen"
        ></v-btn>
      </div>
    </nav>
  </header>

  <aside
    class="h-screen fixed !bg-primary z-[9999] overflow-hidden transition-all duration-300 ease-in-out"
    :class="isNavOpen ? 'md:!w-2/4 !w-3/4 opacity-100' : '!w-0 opacity-0'"
  >
    <div>
      <div>
        <div class="py-10">
          <ul class="*:text-4xl font-extrabold *:inline text-center">
            <li class="text-accent">C</li>
            <li class="!text-secondary">H</li>
            <li class="!text-secondary">C</li>
            <li class="text-accent">H</li>
          </ul>
        </div>

        <v-list nav lines="one" variant="plain">
          <v-list-item to="/">
            <v-list-item-title class="text-uppercase font-weight-bold"
              >Home</v-list-item-title
            >
          </v-list-item>
          <v-list-item to="/Sermon">
            <v-list-item-title class="text-uppercase font-weight-bold"
              >Sermon</v-list-item-title
            >
          </v-list-item>
          <v-list-item to="/ministry">
            <v-list-item-title class="text-uppercase font-weight-bold"
              >Ministry</v-list-item-title
            >
          </v-list-item>
          <v-list-item to="/blog">
            <v-list-item-title class="text-uppercase font-weight-bold"
              >Blog</v-list-item-title
            >
          </v-list-item>
          <v-list-item to="/contact">
            <v-list-item-title class="text-uppercase font-weight-bold"
              >Contact us</v-list-item-title
            >
          </v-list-item>
          <v-list-item to="/">
            <v-list-item-title class="text-uppercase font-weight-bold"
              >pages</v-list-item-title
            >
            <template v-slot:append
              ><v-icon icon="fa-solid fa-plus"></v-icon
            ></template>
          </v-list-item>
        </v-list>

        <ul class="*:inline *:px-3 my-4 px-2">
          <li><i class="fa-brands fa-facebook"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-tiktok"></i></li>
          <li><i class="fa-brands fa-linkedin"></i></li>
        </ul>
      </div>
    </div>
  </aside>
</template>
