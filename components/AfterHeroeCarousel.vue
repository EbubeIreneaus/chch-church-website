<script lang="ts" setup>
import { tryResolveModule } from "nuxt/kit";
import { register } from "swiper/element/bundle";
register();
const events = [
  {
    id: 1,
    title: "New Families During National Adoption Month",
    date: "Mar 3",
    time: "6:00 am",
  },
  {
    id: 2,
    title: "Sharing our faith and love to children",
    date: "Mar 10",
    time: "11:00 am",
  },
  {
    id: 3,
    title: "reflect the commuinty and serving",
    date: "May 10",
    time: "7:00 am",
  },
  {
    id: 4,
    title: "New Families During National Adoption Month",
    date: "Mar 3",
    time: "6:00 am",
  },
  {
    id: 5,
    title: "our sponsorship meetup will be heard again",
    date: "jan 13",
    time: "4:30 pm",
  },
  {
    id: 6,
    title: "Event:lord is sufficient for all our needs",
    date: "sept 13",
    time: "9:00 am",
  },
];
</script>

<template>
  <v-container class="">
    <swiper-container
      :autoplay="true"
      space-between="30"
      loop
      :slide-per-view="1"
      :breakpoints="{
        640: {
          slidesPerView: 2,
        },
      }"
      class="-mt-1 lg:!-mt-20"
    >
    <swiper-slide v-for="ev in events" :key="ev.id">
        <v-sheet
          height="150px"
          class="!flex !items-center !px-5"
          elevation="4"
          rounded="lg"
        >
          <div class="flex gap-5 py-2 relative">
            <v-sheet
              class="lg:!w-[120px] !w-[200px] h-[100px] relative"
              elevation="12"
              rounded="lg"
            >
              <i
                class="fa fa-location-dot !text-center absolute -mt-1.5 fa-xl w-full text-accent"
              ></i>
              <div>
                <h3
                  class="text-h5 w-full text-center text-accent absolute translate-y-1/2 translate-x-0.5 !uppercase"
                >
                  {{ ev.date }}
                </h3>
                <div
                  class="border text-center bg-accent rounded-b-lg py-1 rounded-tr-sm text-white font-semibold absolute w-full bottom-0"
                >
                  <p>{{ ev.time }}</p>
                </div>
              </div>
            </v-sheet>
            <div>
              <h2 class="font-bold text-xl capitalize line-clamp-2">
                {{ ev.title }}
              </h2>
              <RouterLink
                to="/"
                class="!text-accent font-bold !absolute !bottom-4"
                >Event Details</RouterLink
              >
            </div>
          </div>
        </v-sheet>
      </swiper-slide>
    </swiper-container>
  </v-container>
</template>

<style scoped></style>
