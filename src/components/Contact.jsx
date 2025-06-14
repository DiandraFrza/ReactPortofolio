// src/components/Contact.jsx

function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="mb-4 text-3xl sm:text-6xl font-bold text-[var(--color-lavender)] text-spotlight-effect2">
            Contact Me
          </h2>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
            Punya pertanyaan atau tawaran menarik? Jangan ragu untuk menghubungi
            saya!
          </p>
        </div>

        <form action="https://formspree.io/f/mvgaabbg" method="POST">
          <div className="w-full lg:mx-auto lg:w-2/3">
            {/* Input Nama */}
            <div
              className="mb-8 w-full px-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <label
                htmlFor="name"
                className="text-base font-bold text-cyan-600 dark:text-cyan-400"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-md bg-slate-200 dark:bg-slate-800 p-3 text-slate-800 dark:text-slate-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            {/* Input Email */}
            <div
              className="mb-8 w-full px-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <label
                htmlFor="email"
                className="text-base font-bold text-cyan-600 dark:text-cyan-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-md bg-slate-200 dark:bg-slate-800 p-3 text-slate-800 dark:text-slate-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            {/* Input Pesan */}
            <div
              className="mb-8 w-full px-4"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <label
                htmlFor="message"
                className="text-base font-bold text-cyan-600 dark:text-cyan-400"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="h-32 w-full rounded-md bg-slate-200 dark:bg-slate-800 p-3 text-slate-800 dark:text-slate-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <div
              className="w-full px-4"
              data-aos="flip-down"
              data-aos-delay="400"
            >
              <button
                type="submit"
                className="w-full rounded-md bg-cyan-600 py-3 px-8 text-base font-semibold text-white transition duration-500 hover:bg-cyan-700 hover:shadow-lg"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
