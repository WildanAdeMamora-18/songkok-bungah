<script setup>
import { products } from '../data/product'
import {
  Award,
  HandHelping,
  Palette,
  Truck,
  Scissors,
  Package,
  ShieldCheck,
  Ruler,
} from 'lucide-vue-next'
</script>

<template>
  <main>
    <!-- HERO SECTION -->
    <section class="min-h-screen bg-black text-white flex items-center">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <!-- Kiri -->
        <div>
          <span class="text-yellow-500 font-semibold tracking-widest">
            UMKM SONGKOK BUNGAH GRESIK
          </span>

          <h1 class="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Melestarikan Tradisi,
            <span class="text-yellow-500"> Menghasilkan Kualitas </span>
          </h1>

          <p class="text-gray-300 mt-6 leading-relaxed">
            Pengrajin songkok dan peci berkualitas dari Desa Bungah, Gresik yang melayani pesanan
            eceran maupun grosir ke seluruh Indonesia.
          </p>

          <div class="flex gap-4 mt-8">
            <RouterLink
              to="/produk"
              class="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
            >
              Lihat Produk
            </RouterLink>

            <a
              href="https://wa.me/628123456789"
              target="_blank"
              class="border border-yellow-500 px-6 py-3 rounded-lg text-yellow-500"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        <!-- Kanan -->
        <div>
          <img
            src="../assets/images/desa-bungah.jpg"
            alt="Pengrajin Songkok"
            class="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>

    <!-- TENTANG SINGKAT -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Tentang UMKM</h2>

        <p class="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          UMKM Songkok Bungah merupakan usaha kerajinan songkok yang telah melayani berbagai
          kebutuhan masyarakat, sekolah, pondok pesantren, dan instansi. Produk dibuat dengan bahan
          berkualitas dan pengerjaan yang teliti sehingga menghasilkan songkok yang nyaman dan tahan
          lama.
        </p>
      </div>
    </section>

    <!-- KEUNGGULAN -->
    <section class="py-24 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-4xl font-bold mb-14">Mengapa Memilih Kami?</h2>

        <div class="grid md:grid-cols-4 gap-8">
          <!-- Berkualitas -->
          <div
            class="bg-white p-8 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl duration-300 text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-100 flex items-center justify-center"
            >
              <Award class="w-8 h-8 text-yellow-600" />
            </div>

            <h3 class="font-bold text-xl">Berkualitas</h3>

            <p class="mt-3 text-gray-600">Menggunakan bahan pilihan terbaik.</p>
          </div>

          <!-- Handmade -->
          <div
            class="bg-white p-8 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl duration-300 text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-100 flex items-center justify-center"
            >
              <HandHelping class="w-8 h-8 text-yellow-600" />
            </div>

            <h3 class="font-bold text-xl">Handmade</h3>

            <p class="mt-3 text-gray-600">Dikerjakan oleh pengrajin berpengalaman.</p>
          </div>

          <!-- Custom -->
          <div
            class="bg-white p-8 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl duration-300 text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-100 flex items-center justify-center"
            >
              <Palette class="w-8 h-8 text-yellow-600" />
            </div>

            <h3 class="font-bold text-xl">Custom</h3>

            <p class="mt-3 text-gray-600">Menerima desain dan bordir khusus.</p>
          </div>

          <!-- Pengiriman -->
          <div
            class="bg-white p-8 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl duration-300 text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-100 flex items-center justify-center"
            >
              <Truck class="w-8 h-8 text-yellow-600" />
            </div>

            <h3 class="font-bold text-xl">Pengiriman</h3>

            <p class="mt-3 text-gray-600">Melayani pengiriman seluruh Indonesia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUK UNGGULAN -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-4xl font-bold mb-14">Produk Unggulan</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img :src="product.image" :alt="product.name" class="w-full h-72 object-cover" />

            <div class="p-5">
              <h3 class="font-bold text-xl">
                {{ product.name }}
              </h3>

              <p class="text-gray-600 mt-2">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROSES PRODUKSI -->
    <section class="py-18 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <!-- <span class="text-yellow-500 font-semibold tracking-widest"> PROSES PEMBUATAN </span> -->

          <h2 class="text-4xl font-bold mt-3">Proses Produksi Songkok</h2>

          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            Setiap songkok dibuat dengan proses yang teliti untuk menghasilkan produk yang nyaman,
            rapi, dan berkualitas tinggi.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 relative">
          <!-- Step 1 -->
          <div class="relative text-center">
            <div
              class="w-20 h-20 mx-auto rounded-full bg-yellow-500 flex items-center justify-center shadow-lg"
            >
              <Ruler class="w-10 h-10 text-black" />
            </div>

            <h3 class="font-bold text-xl mt-5">Pemilihan Bahan</h3>

            <p class="text-gray-600 mt-3">Memilih bahan bludru, kain, dan pelengkap terbaik.</p>
          </div>

          <!-- Step 2 -->
          <div class="relative text-center">
            <div
              class="w-20 h-20 mx-auto rounded-full bg-yellow-500 flex items-center justify-center shadow-lg"
            >
              <Scissors class="w-10 h-10 text-black" />
            </div>

            <h3 class="font-bold text-xl mt-5">Pemotongan</h3>

            <p class="text-gray-600 mt-3">
              Bahan dipotong sesuai ukuran dan pola yang telah ditentukan.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="relative text-center">
            <div
              class="w-20 h-20 mx-auto rounded-full bg-yellow-500 flex items-center justify-center shadow-lg"
            >
              <Package class="w-10 h-10 text-black" />
            </div>

            <h3 class="font-bold text-xl mt-5">Penjahitan</h3>

            <p class="text-gray-600 mt-3">
              Proses penyatuan setiap bagian dilakukan secara rapi dan presisi.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="relative text-center">
            <div
              class="w-20 h-20 mx-auto rounded-full bg-yellow-500 flex items-center justify-center shadow-lg"
            >
              <ShieldCheck class="w-10 h-10 text-black" />
            </div>

            <h3 class="font-bold text-xl mt-5">Finishing</h3>

            <p class="text-gray-600 mt-3">
              Pemeriksaan kualitas dan perapihan sebelum dikirim ke pelanggan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <!-- <section class="bg-black text-white py-24">
      <div class="max-w-4xl mx-auto text-center px-6">
        <h2 class="text-4xl font-bold">Siap Memesan Songkok Berkualitas?</h2>

        <p class="text-gray-300 mt-5">
          Hubungi kami sekarang dan dapatkan produk songkok terbaik langsung dari pengrajin di Desa
          Bungah, Gresik.
        </p>

        <a
          href="https://wa.me/628123456789"
          target="_blank"
          class="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold"
        >
          Pesan Sekarang
        </a>
      </div>
    </section> -->
  </main>
</template>
