<template>
  <footer class="bg-black text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
      <!-- Logo -->
      <div>
        <h2 class="text-2xl font-bold text-yellow-500 mb-3">SONGKOK BUNGAH</h2>

        <p class="text-gray-400 leading-relaxed">
          UMKM pengrajin songkok berkualitas dari Desa Bungah, Gresik yang mengutamakan kualitas dan
          ketelitian dalam setiap proses produksi.
        </p>
      </div>

      <!-- Menu -->
      <div>
        <h3 class="text-lg font-semibold text-yellow-500 mb-4">Menu</h3>

        <ul class="space-y-2 text-gray-300">
          <li>
            <RouterLink to="/"> Beranda </RouterLink>
          </li>

          <li>
            <RouterLink to="/tentang"> Tentang Kami </RouterLink>
          </li>

          <li>
            <RouterLink to="/produk"> Produk </RouterLink>
          </li>

          <li>
            <RouterLink to="/galeri"> Galeri </RouterLink>
          </li>

          <li>
            <RouterLink to="/kontak"> Kontak </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Kontak -->
      <div>
        <h3 class="text-lg font-semibold text-yellow-500 mb-4">Kontak Kami</h3>

        <div class="space-y-3 text-gray-300">
          <p>📍 Desa Bungah, Kec. Bungah, Kab. Gresik</p>

          <p>📞 0812-3456-7890</p>

          <p>✉ info@songkokbungah.com</p>
        </div>
      </div>

      <!-- Sosial Media -->
      <div>
        <h3 class="text-lg font-semibold text-yellow-500 mb-4">Ikuti Kami</h3>

        <div class="flex gap-4 text-2xl">
          <a href="#"> 📘 </a>

          <a href="#"> 📷 </a>

          <a href="#"> 🎵 </a>

          <a href="#"> ▶ </a>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
      © 2026 Songkok Bungah Gresik. All Rights Reserved.
    </div>
  </footer>
</template>
