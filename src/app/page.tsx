import Hero from "@/components/Hero";
import Teasers from "@/components/Teasers";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Teasers />
      <SiteFooter />
    </main>
  );
}
