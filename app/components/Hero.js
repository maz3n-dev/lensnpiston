
import Image from "next/image";
import Link from "next/link";

export default function Hero(){
  return (
    <header className="relative h-[70vh] flex items-center justify-center">
      <Image src="/images/hero.jpg" alt="car hero" fill style={{objectFit:"cover"}} priority />
      <div className="absolute inset-0 bg-hero-grad"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Cinematic Automotive Photography</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">Luxury-grade visuals engineered for brands, collectors and campaigns.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="#gallery" className="px-6 py-3 bg-accent text-black font-semibold rounded-full">View Gallery</Link>
        </div>
      </div>
    </header>
  );
}
