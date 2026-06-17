<script setup>
defineProps({
  product: Object
})
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-72 object-cover"
    >

    <div class="p-5">

      <span
        class="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm"
      >
        {{ product.category }}
      </span>

      <h3
        class="text-xl font-bold mt-3"
      >
        {{ product.name }}
      </h3>

      <p
        class="text-gray-600 mt-2"
      >
        {{ product.description }}
      </p>

      <div
        class="flex justify-between items-center mt-5"
      >
        <span
          class="font-bold text-yellow-600"
        >
          {{ product.price }}
        </span>

        <a
          href="https://wa.me/628123456789"
          target="_blank"
          class="bg-black text-white px-4 py-2 rounded-lg"
        >
          Pesan
        </a>
      </div>

    </div>
  </div>
</template>
