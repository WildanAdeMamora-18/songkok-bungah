<script setup>
import { ref, computed } from 'vue'
import { gallery } from '../data/gallery'
import GalleryCard from '../components/GalleryCard.vue'

const selectedCategory = ref('Semua')

const categories = ['Semua', 'Produksi', 'Workshop', 'Produk', 'Pengiriman']

const filteredGallery = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return gallery
  }

  return gallery.filter((item) => item.category === selectedCategory.value)
})
</script>

<template>
  <!-- HERO -->
  <section class="bg-black text-white py-24">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h1 class="text-5xl font-bold">Galeri Kegiatan</h1>

      <p class="mt-4 text-gray-300">
        Dokumentasi proses produksi dan hasil karya UMKM Songkok Bungah Gresik.
      </p>
    </div>
  </section>

  <!-- FILTER -->
  <section class="py-10 bg-gray-100">
    <div class="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        class="px-5 py-2 rounded-lg transition"
        :class="selectedCategory === category ? 'bg-yellow-500 text-black' : 'bg-white shadow'"
      >
        {{ category }}
      </button>
    </div>
  </section>

  <!-- GRID GALERI -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GalleryCard v-for="item in filteredGallery" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
