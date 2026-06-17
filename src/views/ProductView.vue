<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/product.js'

const selectedCategory = ref('Semua')

const categories = ['Semua', 'Premium', 'Bordir', 'Custom']

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return products
  }

  return products.filter((product) => product.category === selectedCategory.value)
})
</script>

<template>
  <!-- HERO -->
  <section class="bg-black text-white py-24">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h1 class="text-5xl font-bold">Produk Kami</h1>

      <p class="mt-4 text-gray-300">
        Koleksi songkok dan peci berkualitas hasil produksi UMKM Songkok Bungah.
      </p>
    </div>
  </section>

  <!-- FILTER -->
  <section class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
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

  <!-- PRODUK -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
