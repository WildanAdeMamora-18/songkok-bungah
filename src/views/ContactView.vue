<script setup>
import { MapPin, Phone, Mail, Clock3, MessageCircle } from 'lucide-vue-next'

const submitForm = () => {
  alert('Pesan berhasil dikirim!')
}
</script>

<template>
  <main>
    <!-- HERO -->
    <section class="bg-black text-white py-24">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold">Hubungi Kami</h1>

        <p class="mt-4 text-gray-300">
          Siap membantu kebutuhan songkok dan peci berkualitas untuk Anda.
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <!-- INFORMASI -->
        <div>
          <div class="flex items-center gap-3 mb-8">
            <Phone class="w-8 h-8 text-yellow-600" />

            <h2 class="text-3xl font-bold">Informasi Kontak</h2>
          </div>

          <div class="space-y-6">
            <div
              class="flex gap-4 items-start p-5 rounded-xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition"
            >
              <div
                class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0"
              >
                <MapPin class="w-6 h-6 text-yellow-600" />
              </div>

              <div>
                <h3 class="font-semibold">Alamat</h3>

                <p class="text-gray-600">
                  Desa Bungah, Kecamatan Bungah, Kabupaten Gresik, Jawa Timur
                </p>
              </div>
            </div>

            <div
              class="flex gap-4 items-start p-5 rounded-xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition"
            >
              <div
                class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0"
              >
                <Phone class="w-6 h-6 text-yellow-600" />
              </div>

              <div>
                <h3 class="font-semibold">Telepon / WhatsApp</h3>

                <p class="text-gray-600">0812-3456-7890</p>
              </div>
            </div>

            <div
              class="flex gap-4 items-start p-5 rounded-xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition"
            >
              <div
                class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0"
              >
                <Mail class="w-6 h-6 text-yellow-600" />
              </div>

              <div>
                <h3 class="font-semibold">Email</h3>

                <p class="text-gray-600">info@songkokbungah.com</p>
              </div>
            </div>

            <div
              class="flex gap-4 items-start p-5 rounded-xl border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition"
            >
              <div
                class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0"
              >
                <Clock3 class="w-6 h-6 text-yellow-600" />
              </div>

              <div>
                <h3 class="font-semibold">Jam Operasional</h3>

                <p class="text-gray-600">Senin - Sabtu</p>

                <p class="text-gray-600">08.00 - 17.00 WIB</p>
              </div>
            </div>
          </div>

          <!-- WA BUTTON -->
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            class="inline-flex items-center gap-3 mt-10 bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            <MessageCircle class="w-5 h-5" />
            Chat WhatsApp
          </a>
        </div>

        <!-- FORM -->
        <div class="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <div class="flex items-center gap-3 mb-6">
            <Mail class="w-8 h-8 text-yellow-600" />

            <h2 class="text-3xl font-bold">Kirim Pesan</h2>
          </div>

          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label class="block mb-2"> Nama </label>

              <input type="text" placeholder="Masukkan nama" class="w-full border rounded-lg p-3" />
            </div>

            <div>
              <label class="block mb-2"> Email </label>

              <input
                type="email"
                placeholder="Masukkan email"
                class="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label class="block mb-2"> Pesan </label>

              <textarea
                rows="5"
                placeholder="Tulis pesan..."
                class="w-full border rounded-lg p-3"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- GOOGLE MAPS -->
    <section class="pb-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-center items-center gap-3 mb-10">
          <MapPin class="w-8 h-8 text-yellow-600" />

          <h2 class="text-3xl font-bold">Lokasi Kami</h2>
        </div>

        <div class="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </main>
</template>
