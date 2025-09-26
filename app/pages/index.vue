<template>
  <div>
    <HeroesMainHeroes />
    <SectionsQuote />
    <SectionsAboutUs />
    <SectionsCatalog />
    <SectionsService />
    <SectionsTestimoni />
    <SectionsContactUs />
  </div>
</template>

<script lang="ts" setup>
useHead( {
  title : "Ragil Stone | Jasa Pemasangan & Bahan Batu Alam Gunungkidul Yogyakarta",
  meta  : [
    // Basic
    {
      name    : "description",
      content : "Ragil Stone melayani pemasangan dinding, taman, kolam, dan lantai batu alam dengan finishing rapi, harga transparan, dan garansi pekerjaan. Berlokasi di Semanu, Gunungkidul, Yogyakarta.",
    },
    {
      name    : "keywords",
      content : [
        "jasa pemasangan batu alam gunungkidul",
        "batu alam yogyakarta",
        "jasa tukang batu alam jogja",
        "pemasangan dinding batu alam",
        "lantai batu alam gunungkidul",
        "taman kolam batu alam yogyakarta",
        "batu paras jogja",
        "batu andesit gunungkidul",
        "batu templek yogyakarta",
        "desain custom batu alam",
      ].join( ", " ),
    },

    // Open Graph
    { property: "og:title", content: "Ragil Stone | Jasa Pemasangan Batu Alam Gunungkidul" },
    { property: "og:description", content: "Percantik hunian Anda dengan batu alam berkualitas dari Ragil Stone. Jasa pemasangan profesional & bahan batu alam terbaik di Yogyakarta." },
    { property: "og:image", content: "https://ragilstone.com/images/og-image.webp" },
    { property: "og:url", content: "https://ragilstone.com" },
    { property: "og:type", content: "website" },

    // Twitter
    { name: "twitter:title", content: "Ragil Stone | Jasa Pemasangan Batu Alam Gunungkidul" },
    { name: "twitter:description", content: "Ragil Stone melayani pemasangan dinding, lantai, taman & kolam batu alam dengan finishing rapi dan harga transparan." },
    { name: "twitter:image", content: "https://ragilstone.com/images/og-image.webp" },
    { name: "twitter:card", content: "summary_large_image" },

    // Robots
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
  ],

  link: [
    { rel: "canonical", href: "https://ragilstone.com" },
    { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],

  script: [
    {
      type      : "application/ld+json",
      innerHTML : JSON.stringify( {
        "@context" : "https://schema.org",
        "@type"    : "LocalBusiness",
        name       : "Ragil Stone",
        image      : "https://ragilstone.com/images/batu-alam/batu-alam-15.webp",
        "@id"      : "https://ragilstone.com",
        url        : "https://ragilstone.com",
        telephone  : "+6281999980596",
        email      : "ardynugroho3502@gmail.com",
        address    : {
          "@type"         : "PostalAddress",
          streetAddress   : "Semanu",
          addressLocality : "Gunungkidul",
          addressRegion   : "Yogyakarta",
          addressCountry  : "ID",
        },
        priceRange  : "Rp",
        sameAs      : ["https://wa.me/6281999980596"],
        serviceType : [
          "Pemasangan dinding batu alam",
          "Taman & kolam batu alam",
          "Lantai & jalan setapak",
          "Desain custom batu alam",
        ],
      } ),
    },
  ],
} )


</script>