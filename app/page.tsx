import Map from "@/components/map";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import retrieveWashrooms from "@/lib/washrooms/retrieveWashrooms";
import Card from "@/components/UI/card";
import Avatar from "@/components/UI/avatar";
import Testimonial from "@/components/testimonial";

export default async function Home() {
  const washroomsData = await retrieveWashrooms();
  const HERO_TEXT1_1 = "Find your nearest";
  const HERO_TEXT1_2 = "washrooms near you.";
  const HERO_TEXT2 = "Testimonial";

  return (
    <div className="min-h-screen bg-white dark:bg-black dark:text-white">
      <Header />

      <main className="max-w-4xl mx-auto">
        <section
          id="map"
          className="flex-col my-3 justify-center p-3 scroll-mt-40"
        >
          <article>
            <h1 className="text-2xl font-bold text-center sm:text-3xl text-slate-900 dark:text-white">
              {HERO_TEXT1_1}
            </h1>
            <h1 className="text-2xl font-bold text-center sm:text-3xl text-blue-500 dark:text-blue-500">
              {HERO_TEXT1_2}
            </h1>
          </article>
        </section>
        <section className="mx-5 mb-10">
          <Map washrooms={washroomsData} />
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="testimonial" className="p-6 my-12 flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
            {HERO_TEXT2}
          </h1>
          {/* // placeholder for testimonial */}
         <Testimonial /> 
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="contact" className="flex justify-center p-6 my-12">
          {<ContactUs />}
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        {<Footer />}
      </main>
    </div>
  );
}
