<script lang="ts" setup>
import { register } from "swiper/element/bundle";

const ministries = [
  {
    id: "mini1",
    title: "children ministry",
    text: " Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him. Children come to faith in Jesus through Memory verses, Bible lessons, Singing, and Prayer.",
    src: "/images/ministries/children.jpg",
    href: "",
  },

  {
    id: "mini2",
    title: "women ministry",
    text: " Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him. Children come to faith in Jesus through Memory verses, Bible lessons, Singing, and Prayer.",
    src: "/images/ministries/women.jpg",
    href: "",
  },

  {
    id: "mini3",
    title: "global ministry",
    text: " Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him. Children come to faith in Jesus through Memory verses, Bible lessons, Singing, and Prayer.",
    src: "/images/ministries/global.jpg",
    href: "",
  },

  {
    id: "mini4",
    title: "music ministry",
    text: " Children’s ministry is the most important ministry in our church. This ministry helps kids learn about the Lord Jesus and how to start a personal relationship with Him. Children come to faith in Jesus through Memory verses, Bible lessons, Singing, and Prayer.",
    src: "/images/ministries/music.jpg",
    href: "",
  },
];

register();
</script>

<template>
  <div class="my-20">
    <div class="text-center my-5">
      <div class="text-uppercase font-weight-black text-accent">MiNISTRIES</div>
      <h1 class="text-h3 font-weight-bold capitalize">Our Ministries</h1>
    </div>
    <v-container>
      <swiper-container
        :autoplay="{
          delay: 7000,
        }"
        :slides-per-view="1"
        space-between="30"
        loop
        :breakpoints="{
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide v-for="m in ministries" :key="m.id">
          <CardsSingleMinistry
            :title="m.title"
            :text="m.text"
            :src="m.src"
            :href="m.href"
          />
        </swiper-slide>
      </swiper-container>
    </v-container>
  </div>
</template>
