<script lang="ts" setup>
import AOS from 'aos'
import 'aos/dist/aos.css';

onMounted(()=>{
  AOS.init()
})
</script>

<template>
 <v-container>
    <div class="grid lg:grid-cols-2 gap-x-8 gap-y-10 md:my-[100px] justify-center px-5">
    <div class="bg-[url('~/assets/images/about-1-bg.png')] lg:bg-right bg-center relative">
        <v-img src="~/assets/images/about-1.jpg" class="!md:max-w-md w-full mx-auto absolute lg:-top-20 " data-aos="fade-up" />
    </div>
    <div class="lg:-mt-16 animate__animated animate">
        <div class="uppercase font-extrabold text-accent mb-2 " data-aos="fade-up">About Us</div>
        <h3 class="text-h4 !font-semibold " data-aos="fade-up">We are Taking Small Steps to Make Earth Better Planet</h3>
        <div class="mb-3"></div>
        <p class="text-body-1 text-gray-500 mb-5 " data-aos="fade-up">We welcome you with great joy to Zegen Church. We are here to share the great news of Jesus Christ to all that will listen.</p>
        <h1 class="text-2xl font-mono font-semibold italic text-gray-800 " data-aos="fade-up">The name of the Lord is a strong tower; the righteous run into it and are safe.</h1>
        <div class="grid md:grid-cols-2 my-5 gap-x-5 gap-y-8">
            <div class="" data-aos="fade-right">
                <v-icon icon="fa fa-heart" class="border p-5 rounded-full bg-accent" color="white"></v-icon>
                <div class="text-xl font-semibold my-5">Place Of Heaven</div>
                <div class="text-subtitle1 !text-gray-500">In Zegen you will feel divinity, piety, goodness, faith or right beliefs.</div>
            </div>
            <div class="" data-aos="fade-left">
                <v-icon icon="fa fa-bible" class="border p-5 rounded-full bg-accent" color="white"></v-icon>
                <div class="text-xl font-semibold my-5">Study Bible</div>
                <div class="text-subtitle1 !text-gray-500">Learn the Bible enhance your wisdom, give you boldness about your faith.</div>
            </div>
        </div>

        <v-btn class="!bg-accent !px-5 !text-white lg:mt-0 mt-4" data-aos="fade-up" levation="12" height="50" variant="tonal">Learn More</v-btn>
    </div>
  </div>
 </v-container>
</template>
