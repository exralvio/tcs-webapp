import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Register } from "@/components/Register";
import { Showcase } from "@/components/Showcase";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Showcase />
        <Register />
      </main>
      <Footer />
    </>
  );
}
