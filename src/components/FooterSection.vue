<script setup>
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-black text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
      <!-- Logo -->
      <div>
        <div class="flex items-center gap-4 mb-4">
          <img
            src="../assets/images/logo.png"
            alt="UD. IKBAL VIP"
            class="w-14 h-14 object-contain"
          />

          <div>
            <h2 class="text-2xl font-bold text-yellow-500">UD. IKBAL VIP</h2>

            <p class="text-xs text-gray-400 tracking-widest uppercase">Pengrajin Songkok Premium</p>
          </div>
        </div>

        <p class="text-gray-400 leading-relaxed">
          UMKM pengrajin songkok berkualitas dari Desa Bungah, Gresik yang mengutamakan kualitas,
          ketelitian, dan kepercayaan pelanggan dalam setiap proses produksi.
        </p>
      </div>

      <!-- Menu -->
      <div>
        <h3 class="text-lg font-semibold text-yellow-500 mb-4">Menu</h3>

        <ul class="space-y-3 text-gray-300">
          <li>
            <RouterLink to="/" class="hover:text-yellow-500 transition"> Beranda </RouterLink>
          </li>

          <li>
            <RouterLink to="/tentang" class="hover:text-yellow-500 transition">
              Tentang Kami
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/produk" class="hover:text-yellow-500 transition"> Produk </RouterLink>
          </li>

          <li>
            <RouterLink to="/galeri" class="hover:text-yellow-500 transition"> Galeri </RouterLink>
          </li>

          <li>
            <RouterLink to="/kontak" class="hover:text-yellow-500 transition"> Kontak </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Kontak -->
      <div>
        <h3 class="text-lg font-semibold text-yellow-500 mb-4">Kontak Kami</h3>

        <div class="space-y-4 text-gray-300">
          <div class="flex items-start gap-3">
            <MapPin class="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
            <span>Desa Bungah, Kec. Bungah, Kab. Gresik</span>
          </div>

          <div class="flex items-center gap-3">
            <Phone class="w-5 h-5 text-yellow-500 shrink-0" />
            <span>0813-3141-5732</span>
            <span>0877-9701-5222</span>
            <span>0819-4964-8000</span>
          </div>

          <div class="flex items-center gap-3">
            <Mail class="w-5 h-5 text-yellow-500 shrink-0" />
            <span>info@songkokbungah.com</span>
          </div>
        </div>
      </div>

      <!-- Sosial Media -->
      <div>
        <h3 class="text-lg font-semibold text-yellow-500 mb-4">Ikuti Kami</h3>

        <div class="flex gap-4">
          <a
            href="#"
            class="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition"
          >
            <Facebook class="w-5 h-5" />
          </a>

          <a
            href="#"
            class="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition"
          >
            <Instagram class="w-5 h-5" />
          </a>

          <a
            href="#"
            class="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition"
          >
            <Youtube class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
      © 2026 Songkok Bungah Gresik. All Rights Reserved.
    </div>
  </footer>
</template>
