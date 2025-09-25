<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig()
const siteName = config.public.siteName
const title = siteName || "My Awesome App"
const description = "Description"
useHead( {
  htmlAttrs: {
    lang: "id",
  },
  title,
  meta: [
    {
      name    : "description",
      content : description,
    },
  ],
} )
</script>