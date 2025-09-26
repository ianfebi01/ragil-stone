<template>
  <div>
    <HeroesMainHeroes />
    <SectionsQuote/>
    <SectionsAboutUs/>
    <SectionsCatalog />
    <section class="bg-gray-100">
      <div class="main-container p-20">
        <h2 class="h1 mt-0 text-center mb-12">Layanan Pemasangan</h2>
        <div class="flex flex-col md:flex-row gap-8 md:gap-0">
          <div class="md:basis-1/2 flex items-center">
            <ul>
              <li>Pemasangan dinding batu alam (interior &amp; eksterior)</li>
              <li>Taman &amp; kolam batu alam</li>
              <li>Lantai &amp; jalan setapak</li>
              <li>Desain custom sesuai kebutuhan</li>
            </ul>
          </div>
          <div class="md:basis-1/2 flex flex-col justify-center">
            <h3 class="text-xl font-bold mb-4">Keunggulan:</h3>
            <ul class="space-y-2 text-lg text-gray-800 list-none m-0">
              <li class="flex items-center gap-2">
                <span class="text-green-600">✅</span> Tukang berpengalaman
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-600">✅</span> Finishing rapi
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-600">✅</span> Harga transparan
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-600">✅</span> Garansi pekerjaan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <SectionsTestimoni/>
    <SectionsContactUs/>
  </div>
</template>