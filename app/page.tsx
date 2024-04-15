import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <a href="#hero">RestStop Vancity 🚻🚽</a>
          </h1>
          <div>
            <button
              id="mobile-open-button"
              className="text-3xl sm:hidden focus:outline-none"
            >
              &#9776;
            </button>
            <nav
              className="hidden sm:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Find My Washroom
              </a>
              <a href="#testimonial" className="hover:opacity-90">
                Testimonial🧑‍🤝‍🧑
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact📮
              </a>
            </nav>
          </div>
        </section>
      </header>
      <main className="max-w-4xl mx-auto">
        <section
          id="hero"
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              Find the Nearest Public 🚻🚽
            </h2>
            <p className="max-w-md text-xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-300">
              This application uses the City of Vancouver&#39;s Open Portal API
            </p>
            <p className="max-w-md text-xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-300">
              Powered by 🤚🏻WhiteHand Software
            </p>
          </article>
          <Image width={300} height={300} src="/logo1.png" alt="Logo 1" />
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="rockets" className="p-6 my-12 scroll-mt-20">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Bathrooms🚽
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Public
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Public
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Public Washrooms
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Category 2
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Mobile mark
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Park Bathrooms
              </p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Category 3
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Filter info
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                Info
              </p>
            </li>
          </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="testimonial" className="p-6 my-12">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Testimonial🧑‍🤝‍🧑
          </h2>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="contact" className="p-6 my-12">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Contact Us📮
          </h2>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      </main>
    </div>
  );
}
