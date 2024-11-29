import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="h-full relative" id="hero">
      <Image
        src="/hero-bg.webp"
        alt="Hero"
        fill
        className="object-cover object-center"
      />

      <h1 className="absolute text-white lg:text-6xl text-5xl lg:top-[45%] top-1/3 lg:left-16 left-12 font-extrabold lg:leading-relaxed leading-tight">
        Juntos contra a DENGUE <br /> ESSA LUTA É DE
        <span className="text-red-500 ml-2">TODOS!</span>
      </h1>
    </section>
  );
};
