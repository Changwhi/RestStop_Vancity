const Hero = () => {
  const HERO_TEXT1_1 = "Find your nearest";
  const HERO_TEXT1_2 = "washrooms near you.";
  return (
    <section id="map" className="flex-col my-3 justify-center p-3 scroll-mt-40">
      <article>
        <h1 className="text-2xl font-bold text-center sm:text-3xl text-slate-900 dark:text-white">
          {HERO_TEXT1_1}
        </h1>
        <h1 className="text-2xl font-bold text-center sm:text-3xl text-blue-500 dark:text-blue-500">
          {HERO_TEXT1_2}
        </h1>
      </article>
    </section>
  );
};

export default Hero;
