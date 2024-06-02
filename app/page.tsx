import Map from "@/components/map";
import { getVancouverPublicWashroomData } from "@/lib/washrooms/vancouver";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import { useState } from "react";
import Header from "@/components/header";


export default async function Home() {
  const washroomsData = await getVancouverPublicWashroomData();
  const HERO_TEXT1_1 = "Find your nearest";
  const HERO_TEXT1_2 = "washrooms near you.";
  const HERO_TEXT2 = "Testimonial 👨‍👩‍👧‍👦";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <main className="max-w-4xl mx-auto">
        <section className="flex-col my-3 justify-center p-3 scroll-mt-40">
          <article>
            <h1 className="text-2xl font-bold text-center sm:text-3xl text-slate-900 dark:text-white">
              {HERO_TEXT1_1}
            </h1>
            <h1 className="text-2xl font-bold text-center sm:text-3xl text-blue-500 dark:text-white">
              {HERO_TEXT1_2}
            </h1>
          </article>
        </section>
        <section className="mx-5 mb-10">
            <Map washrooms={washroomsData} />
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="testimonial" className="p-6 my-12">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
            {HERO_TEXT2}
          </h2>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="contact" className="flex justify-center p-6 my-12">
          {<ContactUs />}
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section id="contact" className="flex justify-center p-6">
          {<Footer />}
        </section>
      </main>
    </div>
  );
}
