<template>
  <div>
    <section class="relative md:h-[calc(100vh-64px)] overflow-hidden">
      <div class="h-full main-container flex flex-col md:flex-row md:items-center gap-8 py-16 md:py-20">
        <div class="flex flex-col max-w-2xl">
          <div class="flex flex-col justify-center grow">
            <h1 class="mt-0 text-3xl md:text-5xl">Percantik Hunian Anda dengan Batu Alam Berkualitas</h1>
            <h2 class="text-xl md:text-2xl font-normal mt-4">Ragil Stone menyediakan jasa pemasangan profesional dan
              bahan batu
              alam terbaik langsung dari Gunungkidul.</h2>
            <div class="flex items-center gap-6 md:gap-8 mt-8 md:mt-16 flex-wrap">
              <NuxtLink :to="`https://wa.me/6281999980596`" class="button button-primary">
                <Icon name="fa7-solid:paper-plane" />
                Konsultasi Gratis
              </NuxtLink>
              <NuxtLink :to="`/#katalog`" class="button button-secondary">
                <Icon name="fa7-solid:images" />
                Lihat Katalog
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="overflow-hidden aspect-square rounded-2xl relative">
          <img
            src="/images/batu-alam/batu-alam-15.webp"
            alt="Batu alam 15"
            width="500"
            height="500"
            loading="eager"
            class="object-cover w-full h-full hover:scale-105 ease-out duration-300" />

          <div class="absolute bottom-0 z-10 text-white/90 w-full inset-x-0">
            <!-- overlay shadow bottom -->
            <div class="absolute w-full bottom-0 bg-gradient-to-t from-[#000]/80 to-transparent h-full z-0"></div>
            <div class="p-4 lg:p-8 relative z-[1] mt-4">
              <p class="h2 m-0">Ragil Stone</p>
              <p class="m-0">Jasa Pemasangan Batu Alam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100">
      <div class="main-container p-20">
        <div class=" max-w-2xl mx-auto">
          <blockquote cite="https://www.example.com/artikel" class="text-3xl text-center">
            <Icon name="fa7-solid:quote-left" />
            Misi kami adalah menghadirkan keindahan alami ke dalam rumah, taman, dan bangunan Anda.
            <Icon name="fa7-solid:quote-right" />
          </blockquote>
        </div>
      </div>
    </section>
    <section>
      <div class="main-container p-20">
        <h2 class="h1 mt-0 text-center mb-12">Tentang Kami</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-gradient-to-t from-gray-100 to-white hover:shadow-2xl transition-default p-8 text-center rounded-xl">
            <div class="overflow-hidden p-6">
              <img
                src="@/assets/images/calendar-31.svg"
                alt="calendar"
                class="w-full h-full object-contain object-center" />
            </div>
            <p>Berpengalaman dalam pemasangan batu alam sejak bertahun-tahun</p>
          </div>
          <div
            class="bg-gradient-to-t from-gray-100 to-white hover:shadow-2xl transition-default p-8 text-center rounded-xl">
            <div class="overflow-hidden p-6">
              <img src="@/assets/images/map-65.svg" alt="map" class="w-full h-full object-contain object-center" />
            </div>
            <p>Lokasi strategis di Semanu, Gunungkidul (sentra batu alam Yogyakarta)</p>
          </div>
          <div
            class="bg-gradient-to-t from-gray-100 to-white hover:shadow-2xl transition-default p-8 text-center rounded-xl">
            <div class="overflow-hidden p-6">
              <img
                src="@/assets/images/real-estate-agent-8.svg"
                alt="real-estate-agent"
                class="w-full h-full object-contain object-center" />
            </div>
            <p>Menyediakan berbagai jenis batu alam dengan kualitas terjamin</p>
          </div>
        </div>
      </div>
    </section>
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
    <section>
      <div class="main-container p-20">
        <h2 class="h1 mt-0 text-center mb-12">Hubungi Kami</h2>
        <div class="flex flex-col-reverse md:flex-row gap-8 md:gap-0">
          <div class="md:basis-1/2 flex items-center">
            <ul class="list-none m-0">
              <li class="flex items-center gap-4">
                <Icon name="fa7-solid:location-dot" /> Alamat: Semanu, Gunungkidul, Yogyakarta
              </li>
              <li class="flex items-center gap-4">
                <Icon name="fa7-solid:phone" />Telepon/WA: <b>081999980596</b>
              </li>
              <li class="flex items-center gap-4">
                <Icon name="fa7-solid:envelope" /> Email: <a
                  href="mailto:ardynugroho3502@gmail.com">Ardynugroho3502@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="md:basis-1/2 flex flex-col justify-center">
            <div class="overflow-hidden aspect-square rounded-2xl max-md:max-w-80 relative p-8 mx-auto">
              <img
                src="@/assets/images/calling-88.svg"
                alt="Calling"
                width="500"
                height="500"
                loading="eager"
                class="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100">
      <div class="main-container p-20">
        <h2 class="h1 mt-0 text-center mb-12">Testimoni Pelanggan</h2>
        <div
          class="bg-gradient-to-b from-gray-100 to-white hover:shadow-2xl transition-default p-8 text-center rounded-xl relative">
          <blockquote cite="https://www.example.com/artikel" class="text-2xl text-center mb-8 max-w-2xl mx-auto">
            <Icon name="fa7-solid:quote-left" />
            Hasil pemasangan sangat rapi, rumah jadi terlihat lebih alami dan elegan.
            <Icon name="fa7-solid:quote-right" />
          </blockquote>
          <div class="flex items-center gap-2 text-yellow-300 justify-center mb-8">
            <template v-for="item in 5" :key="item">
              <Icon name="fa7-solid:star" />
            </template>
          </div>
          <div
            class="overflow-hidden size-20 aspect-square rounded-full absolute bottom-0 inset-x-0 mx-auto translate-y-1/2 border-4 border-white">
            <img src="@/assets/images/ianfebi.webp" alt="calendar" class="w-full h-full object-contain object-center" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>