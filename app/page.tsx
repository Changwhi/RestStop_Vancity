import NavigateButton from "@/components/navigateButton";
import Map from "@/components/map";
import { getVancouverPublicWashroomData } from "@/lib/washrooms/vancouver";

export default async function Home() {
  const washroomsData = await getVancouverPublicWashroomData();

  return (
    <div className="min-h-screen text-white">
      <main className="mx-auto">
        <section
          id="hero"
          className="min-w-64 flex flex-col justify-center items-center m-2 p-4 scroll-mt-40 rounded-lg border-2 border-white md:flex-row "
        >
          <article className="sm:w-1/2">
            <h2 className="text-3xl font-bold text-center">
              Find Public Bathrooms 🚻
            </h2>
            <p className=" text-lg mt-4 text-center text-slate-300">
              Powered by 🤚🏻WhiteHand Software
            </p>
          </article>
          <div className="m-10 size-full min-w-64">
            {/* Map Module Goes Here */}
            <Map washrooms={washroomsData} />
          </div>
        </section>

        <hr className="mx-auto bg-white w-1/2" />
        {/* Seperation Bar */}
        <section id="bathrooms" className="p-6 my-12 scroll-mt-20">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Bathrooms🚽
          </h2>
          {washroomsData.map((washroom) => {
            return (
              <NavigateButton
                key={washroom.primaryind}
                lat={washroom.geo_point_2d.lat}
                lon={washroom.geo_point_2d.lon}
              />
            );
          })}
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
                Map 🗺️
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
