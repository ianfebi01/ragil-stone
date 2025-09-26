<template>
  <section ref="containerRef">
    <div class="main-container p-20">
      <h2 class="h1 mt-0 text-center mb-12">Testimoni Pelanggan</h2>
      <div
        class="bg-gradient-to-t from-gray-100 to-white hover:shadow-2xl transition-default p-8 text-center rounded-xl relative">
        <blockquote ref="textRef" cite="https://www.example.com/artikel" class="text-2xl text-center mb-8 max-w-2xl mx-auto opacity-0 scale-75">
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
          class="overflow-hidden size-20 aspect-square rounded-full absolute bottom-0 inset-x-0 mx-auto translate-y-1/2 border-4 border-gray-100">
          <img
            src="@/assets/images/ianfebi.webp"
            alt="calendar"
            class="w-full h-full object-contain object-center" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin( ScrollTrigger )

const containerRef = ref<HTMLElement | null>( null )
const textRef = ref<( HTMLElement | null )>( null )


onMounted( () => {
    const ctx = gsap.context( () => {
        const tl = gsap.timeline( {
            scrollTrigger: {
                trigger       : containerRef.value,
                start         : "bottom 75%",
                toggleActions : "play none none none",
            },
        } )

        if ( textRef.value ) {
            tl.to( textRef.value, {
                ease     : "bounce.out",
                scale    : 1,
                duration : 1,
                opacity  : 1,
                delay    : 0.2,
            } )
        }

    }, containerRef )

    onBeforeUnmount( () => ctx.revert() )
} )
</script>