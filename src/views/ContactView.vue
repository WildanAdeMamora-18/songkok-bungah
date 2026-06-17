<script setup>
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
          <h2 class="text-3xl font-bold mb-8">Informasi Kontak</h2>

          <div class="space-y-6">
            <div class="flex gap-4 items-start">
              <span class="text-3xl"> 📍 </span>

              <div>
                <h3 class="font-semibold">Alamat</h3>

                <p class="text-gray-600">
                  Desa Bungah, Kecamatan Bungah, Kabupaten Gresik, Jawa Timur
                </p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <span class="text-3xl"> 📞 </span>

              <div>
                <h3 class="font-semibold">Telepon / WhatsApp</h3>

                <p class="text-gray-600">0812-3456-7890</p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <span class="text-3xl"> ✉ </span>

              <div>
                <h3 class="font-semibold">Email</h3>

                <p class="text-gray-600">info@songkokbungah.com</p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <span class="text-3xl"> 🕒 </span>

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
            class="inline-block mt-10 bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90"
          >
            Chat WhatsApp
          </a>
        </div>

        <!-- FORM -->
        <div class="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold mb-6">Kirim Pesan</h2>

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
        <h2 class="text-3xl font-bold text-center mb-10">Lokasi Kami</h2>

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
