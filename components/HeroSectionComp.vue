<script lang="ts" setup></script>

<template>
  <v-carousel
    class="!h-screen md:!h-full lg:!h-screen"
    hide-delimiters
    :show-arrows="false"
    cycle
    continuous
    :interval="7000"
    :transition-speed="2000"
  >
    <v-carousel-item>
      <div class="before-cover before:bg-secondary/90">
        <VImg
          src="~/assets/images/bg/carousel-d-1.jpg"
          cover
          class="!h-screen md:!h-fit"
        />
        <div
          class="absolute z-[99999999] w-full h-full px-0.5 top-0 left-0 flex items-center"
        >
          <div class="w-full h-fit  text-center">
            <v-img
              src="~/assets/images/icon/dove.png"
              width="80"
              class="mx-auto mb-4 animate__animated animate__fadeInRight"
            />
            <h4
              class="text-accent uppercase md:text-2xl text-xl font-bold animate__animated animate__fadeInLeft"
            >
              we help you get things done
            </h4>
            <h2
              class="md:text-5xl text-3xl uppercase font-extrabold !text-primary my-5 animate-zoom-entrance"
            >
              god give us power
            </h2>
            <p
              class="max-w-3xl mx-auto !text-primary capitalize font-semibold animate__animated animate__fadeInUp animate__delay-1s"
            >
              Jesus is holy, loving and worthy of all our worship and devotion.
              you will feel heaven in our glorious church. join us and praise
              the lord jesus christ
            </p>
            <v-btn
              variant="tonal"
              class="!bg-accent text-white mt-5 animate__animated animate__fadeInUp animate__delay-2s"
              >Contact us</v-btn
            >
          </div>
        </div>
      </div>
    </v-carousel-item>

    <v-carousel-item>
      <div class="before-cover before:bg-secondary/90">
        <VImg
          src="~/assets/images/bg/carousel-d-2.jpg"
          cover
          class="!h-dvh md:!h-fit"
        />
        <div
          class="absolute z-[99999999] w-full h-full px-0.5 top-0 left-0 flex items-center"
        >
          <div class="w-full h-fit text-center">
            <v-img
              src="~/assets/images/icon/bible.png"
              width="80"
              class="mx-auto mb-4 animate__animated animate__fadeInRight"
            />
            <h4
              class="text-accent uppercase md:text-2xl text-xl font-bold animate__animated animate__fadeInLeft"
            >
              we help you get things done
            </h4>
            <h2
              class="md:text-5xl text-3xl uppercase font-extrabold !text-primary my-5 animate-zoom-entrance"
            >
              Bring Them Home
            </h2>
            <p
              class="max-w-3xl mx-auto !text-primary capitalize font-semibold animate__animated animate__fadeInUp animate__delay-1s"
            >
              Jesus is holy, loving and worthy of all our worship and devotion.
              you will feel heaven in our glorious church. join us and praise
              the lord jesus christ
            </p>
            <v-btn
              variant="tonal"
              class="!bg-accent text-white mt-5 animate__animated animate__fadeInUp animate__delay-2s"
              >Contact us</v-btn
            >
          </div>
        </div>
      </div>
    </v-carousel-item>

    <v-carousel-item>
      <div class="before-cover before:bg-secondary/90">
        <VImg
          src="~/assets/images/bg/carousel-d-3.jpg"
          cover
          class="!h-dvh md:!h-fit"
        />
        <div
          class="absolute z-[99999999] w-full h-full px-0.5 top-0 left-0 flex items-center"
        >
          <div class="w-full h-fit text-center">
            <v-img
              src="~/assets/images/icon/loveus.png"
              width="80"
              class="mx-auto mb-4 animate__animated animate__fadeInRight"
            />
            <h4
              class="text-accent uppercase md:text-2xl text-xl font-bold animate__animated animate__fadeInLeft"
            >
              we help you get things done
            </h4>
            <h2
              class="md:text-5xl text-3xl uppercase font-extrabold !text-primary my-5 animate-zoom-entrance"
            >
              Prace The Lord
            </h2>
            <p
              class="max-w-3xl mx-auto !text-primary capitalize font-semibold animate__animated animate__fadeInUp animate__delay-1s"
            >
              Jesus is holy, loving and worthy of all our worship and devotion.
              you will feel heaven in our glorious church. join us and praise
              the lord jesus christ
            </p>
            <v-btn
              variant="tonal"
              class="!bg-accent text-white mt-5 animate__animated animate__fadeInUp animate__delay-2s"
              >Contact us</v-btn
            >
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped lang="scss">
.v-window {
  &-x-transition,
  &-x-reverse-transition,
  &-y-transition,
  &-y-reverse-transition {
    &-enter-active,
    &-leave-active {
      transition: 1.5s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
    }
  }
}
</style>
