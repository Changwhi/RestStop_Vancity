import Map from "@/components/map";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import retrieveWashrooms from "@/lib/washrooms/retrieveWashrooms";
import Testimonial from "@/components/testimonial";
import Hero from "@/components/hero";

export default async function Home() {
  const washroomsData = await retrieveWashrooms();

  return (
    <>
      <Header />
    <div className="min-h-screen overflow-hidden bg-slate-200 dark:bg-slate-800 dark:text-white">
      <section className="flex flex-col justify-center items-center">
        <main className="max-w-4xl">
          <Hero />
          <Map washrooms={washroomsData} />
          <ContactUs />
          <Testimonial />
          <Footer />
        </main>
      </section>
    </div>
  </>
  );
}
