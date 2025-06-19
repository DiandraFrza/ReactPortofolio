import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ... array testimonials tidak berubah ...
const testimonials = [
  {
    name: "Lihuaa",
    title: "Art Director",
    quote:
      "Cocok intinya! Kolaborasi sama dia asik banget. Hasilnya elegan dan melebihi ekspektasi. Keren!",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "Sabrar",
    title: "Project Manager, Tech Startup",
    quote:
      "Sangat profesional dan punya visi desain yang kuat. Project kami selesai tepat waktu dan sesuai dengan yang kami inginkan. Perfect.",
    avatar: "https://i.pravatar.cc/150?img=56",
  },
  {
    name: "Jennie",
    title: "Lead Developer",
    quote:
      "Komunikasinya lancar dan hasilnya selalu on point. Salah satu desainer terbaik yang pernah bekerja sama dengan tim kami.",
    avatar: "https://i.pravatar.cc/150?img=40",
  },
  {
    name: "Michael B.",
    title: "Founder of CreativeCo",
    quote:
      "Dia benar-benar mengubah cara kami melihat branding. Visinya luar biasa dan eksekusinya tanpa cela. Sangat direkomendasikan!",
    avatar: "https://i.pravatar.cc/150?img=32", // Koreksi kecil, path svg lokal mungkin tidak jalan di stackblitz/codesandbox, ganti ke pravatar utk demo
  },
];

function Contact() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <section
      id="contact"
      // UBAH 1: Kurangi padding vertikal di mobile, balikin lagi di desktop
      className="relative w-full py-16 lg:py-20 bg-[#61636c] text-white"
    >
      <div className="absolute inset-0 bg-repeat bg-[url('assets/img/noise-transparent.png')] pointer-events-none"></div>

      {/* UBAH 2: Kurangi padding horizontal di mobile, gedein dikit di tablet/desktop */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        {/* UBAH 3: Kurangi margin bawah di mobile */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-down">
          <h2 className="mb-4 text-4xl sm:text-6xl font-bold text-spotlight-effect">
            Contact Me
          </h2>
          <p className="mt-4 text-base md:text-lg text-white max-w-2xl mx-auto">
            Punya ide project atau tawaran menarik? Jangan ragu buat ngobrol, gw
            selalu terbuka untuk kolaborasi!
          </p>
        </div>

        {/* UBAH 4 (Paling Penting): Atur gap (jarak) secara responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Testimoni Slider */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
              Apa Kata Mereka?
            </h3>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="w-full"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-slate-900/40 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-[#9db2cf]/50 h-full flex flex-col justify-center text-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    {/* UBAH 5: Kecilin font quote di mobile biar gak terlalu penuh */}
                    <p className="text-slate-300 italic text-base sm:text-lg m-4 sm:m-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-bold text-white text-lg sm:text-xl">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#9db2cf]">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <style>{`.swiper-button-next,.swiper-button-prev{color:#9db2cf}.swiper-pagination-bullet-active{background-color:#9db2cf}`}</style>
            </Swiper>
          </div>

          {/* Kolom Kanan: Form Kontak (Struktur form tidak berubah) */}
          <form
            action="https://formspree.io/f/mvgaabbg"
            method="POST"
            encType="multipart/form-data"
            data-aos="fade-left"
            data-aos-delay="200"
            // UBAH 6: Kecilin padding di mobile
            className="bg-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-[#9db2cf]"
          >
            {/* Input fields tetap sama, sudah `w-full` jadi aman */}
            <div className="mb-6 w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-medium text-[#9db2cf]"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-md bg-slate-800 border border-[#9db2cf] p-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9db2cf] transition"
              />
            </div>
            <div className="mb-6 w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-[#9db2cf]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-md bg-slate-800 border border-[#9db2cf] p-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9db2cf] transition"
              />
            </div>
            <div className="mb-8 w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-[#9db2cf]"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full rounded-md bg-slate-800 border border-[#9db2cf] p-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9db2cf] transition"
              ></textarea>
            </div>
            <div className="mb-8 w-full">
              <label
                htmlFor="attachment"
                className="block mb-2 text-base font-medium text-[#9db2cf]"
              >
                Lampirkan File (Opsional)
              </label>
              <div className="flex items-center">
                <label
                  htmlFor="attachment"
                  className="cursor-pointer bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Pilih File
                </label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {fileName && (
                  // UBAH 7: Tambah `min-w-0` biar nama file panjang gak ngerusak layout
                  <span className="ml-4 text-sm text-slate-300 truncate min-w-0">
                    {fileName}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-[#a777da] to-blue-600 py-3 px-8 text-base font-semibold text-white transition duration-300 hover:from-[#a777da] hover:to-[#8a6ea8d5] hover:shadow-lg hover:shadow-[#bb9fd8] transform hover:-translate-y-1"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
