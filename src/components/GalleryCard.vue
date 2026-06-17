<script setup>
defineProps({
  item: Object
})
</script>

<template>
  <div
    class="group overflow-hidden rounded-xl shadow-lg bg-white"
  >
    <div class="overflow-hidden">
      <img
        :src="item.image"
        :alt="item.title"
        class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
      >
    </div>

    <div class="p-4">

      <span
        class="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full"
      >
        {{ item.category }}
      </span>

      <h3
        class="mt-3 font-semibold text-lg"
      >
        {{ item.title }}
      </h3>

    </div>
  </div>
</template>
