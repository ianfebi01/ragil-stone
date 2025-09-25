<template>
  <div class="flex flex-col relative min-h-screen">
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig()
const siteName = config.public.siteName
const title = siteName || "Ragil Stone | Jasa Pemasangan Batu Alam"
const description = "Ragil Stone menyediakan jasa pemasangan profesional dan bahan batu alam terbaik langsung dari Gunungkidul."
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
  link: [
    // Icon
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
    { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
    { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon-64.png" },
    { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
    { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon-180.png" },
    { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
} )
</script>