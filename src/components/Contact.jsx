import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import defaultImg from "../assets/img/profile/personal-center-24.svg";
import InfoModal from "./InfoModal";

const testimonials = [
  {
    name: "ccaaaaa.",
    quote: "ASEKK",
    avatar: defaultImg,
  },
  {
    name: "firza",
    quote: "test",
    avatar: defaultImg,
  },
  {
    name: "aldi",
    quote:
      "Mantap bang keren banget websitenya, tapi gua mau kasih saran sedikit. Tambhin bnyk animasi.",
    avatar: defaultImg,
  },
  {
    name: "Lihuaa",
    quote:
      "Cocok intinya! Kolaborasi sama dia asik banget. Hasilnya elegan dan melebihi ekspektasi. Keren!",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "Jennie",
    quote:
      "Komunikasinya lancar dan hasilnya selalu on point. Salah satu desainer terbaik yang pernah bekerja sama dengan tim kami.",
    avatar: "https://i.pravatar.cc/150?img=40",
  },
  {
    name: "Michael B.",
    quote:
      "Dia benar-benar mengubah cara kami melihat branding. Visinya luar biasa dan eksekusinya tanpa cela. Sangat direkomendasikan!",
    avatar: defaultImg,
  },
];

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormClick = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 lg:py-20 bg-[#61636c] text-white"
    >
      <div className="absolute inset-0 bg-repeat bg-[url('assets/img/noise-transparent.png')] pointer-events-none"></div>
      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-down">
          <h2 className="mb-4 text-4xl sm:text-6xl font-bold text-spotlight-effect">
            Contact Me
          </h2>
          <p className="mt-4 text-base md:text-lg text-white max-w-2xl mx-auto">
            Have a project idea or attractive offer? Don't hesitate to chat, I
            am Always open to collaboration!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
              Comments ({testimonials.length})
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
                      className="w-20 h-20 rounded-full mx-auto mb-2"
                    />
                    <p className="font-bold text-white text-lg sm:text-xl">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-300 italic text-base sm:text-lg mt-4 sm:m-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <style>{`.swiper-button-next,.swiper-button-prev{color:#9db2cf}.swiper-pagination-bullet-active{background-color:#9db2cf}`}</style>
            </Swiper>
          </div>

          <form
            onClick={handleFormClick}
            data-aos="fade-left"
            data-aos-delay="200"
            className="bg-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-[#9db2cf]"
          >
            <fieldset className="opacity-70">
              <div className="mb-6 w-full">
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-medium text-[#9db2cf]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  disabled
                  className="w-full rounded-md bg-slate-800 border border-[#9db2cf] p-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9db2cf] transition cursor-not-allowed"
                />
              </div>
              <div className="mb-8 w-full">
                <label
                  htmlFor="message"
                  className="block mb-2 text-base font-medium text-[#9db2cf]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  disabled
                  className="w-full rounded-md bg-slate-800 border border-[#9db2cf] p-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9db2cf] transition cursor-not-allowed"
                ></textarea>
              </div>
              <div className="mb-8 w-full">More actions
              <label
                htmlFor="attachment"
                className="block mb-2 text-base font-medium text-[#9db2cf]"
              >
                Upload Gambar (Optional)
              </label>
              <div className="flex items-center">
                <label
                  htmlFor="attachment"
                  className="cursor-pointer bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Select File
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
                  <span className="ml-4 text-sm text-slate-300 truncate min-w-0">
                    {fileName}
                  </span>
                )}
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled
                  className="w-full rounded-md bg-gradient-to-r from-[#a777da] to-blue-600 py-3 px-8 text-base font-semibold text-white transition duration-300 transform cursor-not-allowed"
                >
                  Send Message
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-xl font-bold text-white mb-2">NOTHING IS KNOWN!</h3>
        <p className="text-slate-300">
          Error in SQL::[567890sjdshgg6789000] <br></br> UNKNWOWN API.
        </p>
      </InfoModal>
    </section>
  );
}

export default Contact;
