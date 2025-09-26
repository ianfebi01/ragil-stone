<template>
  <section id="katalog">
    <div class="main-container p-20">
      <h2 class="h1 mt-0 text-center mb-12">Katalog Produk Batu Alam</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in catalogs"
          :key="index"
          class="aspect-square w-full overflow-hidden rounded-xl"
          @click="onClickImage(item)">
          <img
            :src="item"
            :alt="`batu alam ${index}`"
            width="500"
            height="500"
            class="object-cover object-center w-full h-full transition-default hover:scale-105" />
        </div>
      </div>
    </div>
    <PreviewImage v-model="isOpenPreview" :selected-image="selectedImage" @close-modal="isOpenPreview = false" />
  </section>
</template>

<script lang="ts" setup>
const selectedImage = ref<string>( "" )
const isOpenPreview = ref<boolean>( false )

const onClickImage = ( val: string ) => {
  isOpenPreview.value = true
  selectedImage.value = val
}
const catalogs = Array.from( { length: 47 }, ( _, i ) =>
  `/images/batu-alam/batu-alam-${i + 1}.webp`,
)
</script>