<template>
  <div>
    <section class="relative h-[calc(100vh-64px)] overflow-hidden">
      <!-- <div class="absolute inset-y-0 right-0 w-1/2 h-full">
        <div class="grid h-full grid-cols-2 grid-rows-2">
          <div class="overflow-hidden">
            <img
              src="/images/batu-alam/batu-alam-1.webp"
              alt="Batu alam 1"
              width="500"
              height="500"
              class="object-cover w-full h-full hover:scale-110 ease-out duration-300" />
          </div>
          <div class="overflow-hidden">
            <img
              src="/images/batu-alam/batu-alam-2.webp"
              alt="Batu alam 1"
              width="500"
              height="500"
              class="object-cover w-full h-full hover:scale-110 ease-out duration-300" />
          </div>
          <div class="col-span-2 overflow-hidden">
            <img
              src="/images/batu-alam/batu-alam-3.webp"
              alt="Batu alam 1"
              width="500"
              height="500"
              class="object-cover w-full h-full hover:scale-110 ease-out duration-300" />
          </div>
        </div>
      </div> -->
      <div class="h-full main-container flex items-center gap-8">
        <div class="flex flex-col max-w-2xl">
          <div class="flex flex-col justify-center py-20 grow">
            <h1 class="mt-0 text-5xl">Percantik Hunian Anda dengan Batu Alam Berkualitas</h1>
            <h2 class="text-2xl font-normal mt-4">Ragil Stone menyediakan jasa pemasangan profesional dan bahan batu alam terbaik langsung dari Gunungkidul.</h2>
            <div class="flex items-center gap-8 mt-16">
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
  </div>
</template>