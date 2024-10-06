<script lang="ts" setup>
defineProps<{ src: string; title: string; text: string; href: string }>();
</script>

<template>
  <div class="bg-accent relative pb-1.5 rounded-b-md">
    <v-card elevation="4" rounded="100px">
    <img :src="src" class="!w-[100%] !h-[212px] object-cover object-center" />
    <VCardTitle
      class="text-h5 text-high-emphasis font-weight-black py-5 text-capitalize"
      >{{ title }}</VCardTitle
    >
    <v-card-text class="">
      <p class="line-clamp-3 text-overline text-subtitle-1">
        {{ text }}
      </p>
    </v-card-text>

    <v-card-actions class="px-5">
      <RouterLink
        :to="href"
        class="text-accent font-weight-black underline underline-offset-4"
        >Read More</RouterLink
      >
    </v-card-actions>
  </v-card>
  </div>
</template>
