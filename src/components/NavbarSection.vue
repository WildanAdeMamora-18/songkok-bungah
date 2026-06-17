<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const menus = [
  {
    name: 'Beranda',
    path: '/',
  },
  {
    name: 'Tentang Kami',
    path: '/tentang',
  },
  {
    name: 'Produk',
    path: '/produk',
  },
  {
    name: 'Galeri',
    path: '/galeri',
  },
  {
    name: 'Kontak',
    path: '/kontak',
  },
]
</script>

<template>
  <nav class="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3">
          <div
            class="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center text-xl"
          >
            🧢
          </div>

          <div>
            <h1 class="text-xl font-bold text-yellow-500">SONGKOK BUNGAH</h1>

            <p class="text-xs text-gray-400 tracking-[4px]">GRESIK</p>
          </div>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <RouterLink v-for="menu in menus" :key="menu.path" :to="menu.path" v-slot="{ isActive }">
            <div
              class="relative py-2 font-medium transition duration-300 cursor-pointer"
              :class="isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-500'"
            >
              {{ menu.name }}

              <!-- Active Indicator -->
              <span
                v-if="isActive"
                class="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 h-0.5 bg-yellow-500 rounded-full"
              />
            </div>
          </RouterLink>

          <!-- WA Button -->
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            class="border border-yellow-500 text-yellow-500 px-5 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            WhatsApp
          </a>
        </div>

        <!-- Mobile Button -->
        <button @click="toggleMenu" class="md:hidden text-2xl">☰</button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-3"
      >
        <div v-if="isOpen" class="md:hidden pb-6 flex flex-col gap-4">
          <RouterLink
            v-for="menu in menus"
            :key="menu.path"
            :to="menu.path"
            @click="isOpen = false"
            v-slot="{ isActive }"
          >
            <div
              class="py-2 pl-2 border-l-4 transition"
              :class="
                isActive
                  ? 'border-yellow-500 text-yellow-500'
                  : 'border-transparent hover:border-yellow-500 hover:text-yellow-500'
              "
            >
              {{ menu.name }}
            </div>
          </RouterLink>

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            class="bg-yellow-500 text-black text-center py-3 rounded-lg font-semibold mt-2"
          >
            WhatsApp
          </a>
        </div>
      </transition>
    </div>
  </nav>
</template>
